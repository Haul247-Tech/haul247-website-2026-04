import Image from "next/image";

type ScrollMouseIconProps = {
  className?: string;
};

export function ScrollMouseIcon({ className = "" }: ScrollMouseIconProps) {
  return (
    <Image
      src="/images/scroll.gif"
      alt=""
      width={44}
      height={44}
      className={`object-contain ${className}`}
    />
  );
}
