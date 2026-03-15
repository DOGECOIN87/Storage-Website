document.addEventListener('DOMContentLoaded', function() {
    const cmsApiUrl = '/admin/api.php?action=get_data'; // Adjust path if necessary

    async function loadCmsData() {
        try {
            const response = await fetch(cmsApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();

            if (result.success && result.data) {
                const data = result.data;

                // Update Phone
                const phoneElement = document.getElementById('site-phone');
                if (phoneElement) {
                    phoneElement.textContent = data.phone;
                    phoneElement.href = `tel:${data.phone.replace(/[^0-9+]/g, '')}`;
                }

                // Update Email
                const emailElement = document.getElementById('site-email');
                if (emailElement) {
                    emailElement.textContent = data.email;
                    emailElement.href = `mailto:${data.email}`;
                }

                // Update Prices
                if (data.prices) {
                    for (const key in data.prices) {
                        if (Object.hasOwnProperty.call(data.prices, key)) {
                            const priceElement = document.getElementById(`site-price-${key}`);
                            if (priceElement) {
                                priceElement.textContent = data.prices[key];
                            }
                        }
                    }
                }
            } else {
                console.error('CMS API returned an error:', result.message);
                // Graceful fallback: leave existing content or show a default
            }
        } catch (error) {
            console.error('Failed to load CMS data:', error);
            // Graceful fallback: leave existing content or show a default
        }
    }

    loadCmsData();
});
