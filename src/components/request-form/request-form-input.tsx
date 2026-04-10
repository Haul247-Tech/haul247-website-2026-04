import type { InputHTMLAttributes } from "react";

type RequestFormInputProps = InputHTMLAttributes<HTMLInputElement>;

export function RequestFormInput({
  className = "",
  type = "text",
  ...props
}: RequestFormInputProps) {
  return (
    <input
      type={type}
      className={`w-full border-0 border-b border-[#c9ced3] bg-transparent py-2.5 text-[14px] font-[300] text-[#607481] outline-none placeholder:text-[#607481] ${className}`}
      {...props}
    />
  );
}
