"use client";

import Image from "next/image";
import { useEffect, type FormEvent, type ReactNode } from "react";
import { AnimateBtn } from "@/components/animate-btn";

type RequestFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  headerImageSrc: string;
  submitLabel: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  onSubmitButtonClick?: () => void;
  children: ReactNode;
};

export function RequestFormModal({
  isOpen,
  onClose,
  title,
  headerImageSrc,
  submitLabel,
  onSubmit,
  onSubmitButtonClick,
  children
}: RequestFormModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#091822]/70 p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="flex max-h-[95vh] w-full max-w-[880px] flex-col overflow-hidden bg-[#f2f2f2] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="request-form-title"
      >
        <div className="sticky top-0 z-10 h-[76px] w-full shrink-0 overflow-hidden">
          <Image
            src={headerImageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="880px"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="group absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl leading-none text-[#1C4863] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-100 hover:shadow-md active:translate-y-0 active:scale-95 active:bg-slate-200"
          >
            <svg
              aria-hidden
              viewBox="0 0 36 36"
              className="pointer-events-none absolute -inset-1 h-10 w-10 -rotate-90 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="white"
                strokeWidth="1.6"
                strokeDasharray="101"
                className="[stroke-dashoffset:101] transition-[stroke-dashoffset] duration-700 ease-out group-hover:[stroke-dashoffset:0]"
              />
            </svg>
            <span className="relative z-10">×</span>
          </button>
        </div>

        <form
          className="overflow-y-auto px-6 pb-10 pt-8 md:px-10 md:pb-14 md:pt-10"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit?.(event);
          }}
        >
          <h2
            id="request-form-title"
            className="text-[42.14px] font-[500] leading-tight text-[#1C4863]"
          >
            {title}
          </h2>

          {children}

          <div className="mt-14 flex justify-end">
          <AnimateBtn
            type="submit"
            onClick={() => onSubmitButtonClick?.()}
            borderColor="#21445B"
            color="#FFFFFF"
            hoverColor="#21445B"
            activeColor="#21445B"
            hoverBgColor="#FFFFFF"
            className="bg-[#21445B]"
          >
             {submitLabel}
          </AnimateBtn>
            
          </div>
        </form>
      </div>
    </div>
  );
}
