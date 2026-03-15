<?php
session_start();

// Configuration
define("DATA_FILE", __DIR__ . "/data.json");
// IMPORTANT: Change this password before deployment!
// You can generate a hash using password_hash("your_new_password", PASSWORD_DEFAULT);
define("ADMIN_PASSWORD_HASH", password_hash("adminpassword", PASSWORD_DEFAULT)); 

// --- Helper Functions ---

function readData() {
    if (!file_exists(DATA_FILE)) {
        // Initialize with default data if file doesn't exist
        $defaultData = [
            "phone" => "(830) 626-5555",
            "email" => "info@grueneselfstorage.com",
            "prices" => [
                "5x10_non_climate" => "$60",
                "10x10_non_climate" => "$85",
                "10x15_non_climate" => "$120",
                "10x20_non_climate" => "$140",
                "10x30_non_climate" => "$225",
                "5x10_climate" => "$90",
                "10x10_climate" => "$130",
                "10x15_climate" => "$175",
                "10x20_climate" => "$220",
                "11x40_rv" => "$150",
                "11x26_boat" => "$95",
                "open_storage" => "$45"
            ]
        ];
        writeData($defaultData);
        return $defaultData;
    }
    $content = file_get_contents(DATA_FILE);
    if ($content === false) {
        error_log("Failed to read data.json");
        return [];
    }
    $data = json_decode($content, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        error_log("Failed to decode data.json: " . json_last_error_msg());
        return [];
    }
    return $data;
}

function writeData($data) {
    $json = json_encode($data, JSON_PRETTY_PRINT);
    if ($json === false) {
        error_log("Failed to encode data to JSON: " . json_last_error_msg());
        return false;
    }
    // Ensure the file is writable
    if (!is_writable(DATA_FILE) && file_exists(DATA_FILE)) {
        error_log("data.json is not writable. Check file permissions.");
        return false;
    }
    if (file_put_contents(DATA_FILE, $json) === false) {
        error_log("Failed to write to data.json");
        return false;
    }
    return true;
}

function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, "UTF-8");
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function isAuthenticated() {
    return isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true;
}

// --- API Endpoints ---

header("Content-Type: application/json");

$action = $_GET["action"] ?? "";

switch ($action) {
    case "login":
        $input = json_decode(file_get_contents("php://input"), true);
        $password = $input["password"] ?? "";

        if (password_verify($password, ADMIN_PASSWORD_HASH)) {
            $_SESSION["loggedin"] = true;
            // Set HTTP-only session cookie
            session_set_cookie_params(["httponly" => true]);
            echo json_encode(["success" => true, "message" => "Logged in successfully."]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid password."]);
        }
        break;

    case "logout":
        session_unset();
        session_destroy();
        echo json_encode(["success" => true, "message" => "Logged out successfully."]);
        break;

    case "check_auth":
        echo json_encode(["authenticated" => isAuthenticated()]);
        break;

    case "get_data":
        if (!isAuthenticated()) {
            http_response_code(401);
            echo json_encode(["success" => false, "message" => "Unauthorized."]);
            exit;
        }
        $data = readData();
        echo json_encode(["success" => true, "data" => $data]);
        break;

    case "save_data":
        if (!isAuthenticated()) {
            http_response_code(401);
            echo json_encode(["success" => false, "message" => "Unauthorized."]);
            exit;
        }

        $input = json_decode(file_get_contents("php://input"), true);
        $currentData = readData();

        $phone = sanitizeInput($input["phone"] ?? $currentData["phone"]);
        $email = sanitizeInput($input["email"] ?? $currentData["email"]);
        
        if (!validateEmail($email)) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "Invalid email format."]);
            exit;
        }

        $newPrices = [];
        foreach ($currentData["prices"] as $key => $value) {
            $newPrices[$key] = sanitizeInput($input["prices"][$key] ?? $value);
        }

        $newData = [
            "phone" => $phone,
            "email" => $email,
            "prices" => $newPrices
        ];

        if (writeData($newData)) {
            echo json_encode(["success" => true, "message" => "Data saved successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["success" => false, "message" => "Failed to save data."]);
        }
        break;

    default:
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid API action."]);
        break;
}

?>
