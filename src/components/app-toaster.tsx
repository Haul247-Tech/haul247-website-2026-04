"use client";

import { Toaster } from "react-hot-toast";

export function AppToaster() {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      toastOptions={{
        duration: 4500,
        className: "font-sans text-sm",
        style: { maxWidth: "min(420px, calc(100vw - 2rem))" },
        success: {
          style: { background: "#ecfdf5", color: "#065f46" }
        },
        error: {
          style: { background: "#fef2f2", color: "#991b1b" }
        }
      }}
    />
  );
}
