import toast from "react-hot-toast";

export function notifySuccess(message: string) {
  toast.success(message);
}

export function notifyError(message: string) {
  toast.error(message);
}

/** Use for recoverable issues or soft validation outside field errors. */
export function notifyWarning(message: string) {
  toast(message, {
    icon: "⚠️",
    duration: 5000,
    style: {
      background: "#fffbeb",
      color: "#92400e",
      border: "1px solid #fde68a"
    }
  });
}
