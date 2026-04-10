import axios from "axios";
import { API_BASE_URL } from "@/constants/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 30_000
});

apiClient.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers.delete("Content-Type");
  }
  return config;
});

/** Server/body message for failed requests; `null` if not an Axios error. */
export function getAxiosErrorMessage(err: unknown, fallback: string): string | null {
  if (!axios.isAxiosError(err)) return null;
  const data = err.response?.data as { message?: string; error?: string } | undefined;
  return data?.message ?? data?.error ?? err.message ?? fallback;
}
