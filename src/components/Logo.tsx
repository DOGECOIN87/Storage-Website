export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.svg`}
      alt="Gruene Self Storage"
      className={`h-16 w-auto object-contain ${className}`}
    />
  );
}


