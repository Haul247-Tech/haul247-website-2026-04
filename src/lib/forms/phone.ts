const E164_BODY = /^\+[1-9]\d{9,14}$/;

/**
 * Live input: keep a single leading + and digit groups (max 15 digits total).
 */
export function sanitizePhoneInput(value: string) {
  const trimmed = value.trim();
  const keepPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "").slice(0, 15);
  return keepPlus ? `+${digits}` : digits;
}

/**
 * Normalize to E.164-style `+[country][subscriber]` for APIs.
 * - Preserves explicit leading `+`.
 * - Nigerian local mobiles: `0XXXXXXXXXX` (11 digits) → `+234XXXXXXXXX`.
 * - Digits-only starting with `234` → `+234…`.
 */
export function normalizePhoneE164(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";

  const hasPlus = trimmed.startsWith("+");
  const digitsOnly = trimmed.replace(/\D/g, "");

  if (!digitsOnly) return hasPlus ? "+" : "";

  if (hasPlus) {
    return `+${digitsOnly}`;
  }

  if (digitsOnly.startsWith("0") && digitsOnly.length === 11) {
    return `+234${digitsOnly.slice(1)}`;
  }

  if (digitsOnly.startsWith("234") && digitsOnly.length >= 12) {
    return `+${digitsOnly}`;
  }

  return `+${digitsOnly}`;
}

export function isValidE164Phone(normalized: string) {
  return E164_BODY.test(normalized);
}
