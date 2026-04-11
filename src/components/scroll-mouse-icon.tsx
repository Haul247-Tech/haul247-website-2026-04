type ScrollMouseIconProps = {
  className?: string;
};

export function ScrollMouseIcon({ className = "" }: ScrollMouseIconProps) {
  return (
    <svg
      width="26"
      height="40"
      viewBox="0 0 26 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {/* Mouse body */}
      <rect
        x="1"
        y="1"
        width="24"
        height="38"
        rx="12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Scroll wheel */}
      <rect
        x="11.25"
        y="8"
        width="3.5"
        height="7"
        rx="1.75"
        fill="currentColor"
        className="haul-scroll-wheel"
      />
    </svg>
  );
}
