import type { SelectHTMLAttributes } from "react";

type RequestFormSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function RequestFormSelect({
  className = "",
  children,
  ...props
}: RequestFormSelectProps) {
  return (
    <select
      className={`w-full border-0 border-b border-[#c9ced3] bg-transparent py-2.5 text-[14px] font-[300] text-[#607481] outline-none ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
