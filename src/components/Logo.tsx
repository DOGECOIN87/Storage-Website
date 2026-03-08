export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.jpg"
      alt="Gruene Self Storage"
      className={`h-16 w-auto object-contain ${className}`}
    />
  );
}


