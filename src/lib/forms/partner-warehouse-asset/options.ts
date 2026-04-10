export const WAREHOUSE_STATE_OPTIONS = [
  { value: "lagos", label: "Lagos" },
  { value: "ogun", label: "Ogun" },
  { value: "oyo", label: "Oyo" },
  { value: "fct", label: "FCT" },
  { value: "kano", label: "Kano" },
  { value: "rivers", label: "Rivers" },
  { value: "delta", label: "Delta" },
  { value: "edo", label: "Edo" },
  { value: "kaduna", label: "Kaduna" },
  { value: "anambra", label: "Anambra" },
  { value: "enugu", label: "Enugu" },
  { value: "other", label: "Other" }
] as const;

export const GOODS_TYPE_OPTIONS = [
  { value: "dry-cargo", label: "Dry cargo" },
  { value: "refrigerated", label: "Refrigerated" },
  { value: "hazardous", label: "Hazardous (licensed)" },
  { value: "general-merchandise", label: "General merchandise" },
  { value: "mixed", label: "Mixed" },
  { value: "other", label: "Other" }
] as const;

export const FACILITY_OPTIONS = [
  { value: "racking", label: "Racking / shelving" },
  { value: "cold-storage", label: "Cold storage" },
  { value: "loading-bay", label: "Loading bays" },
  { value: "security", label: "24/7 security" },
  { value: "fenced-compound", label: "Fenced compound" },
  { value: "fire-systems", label: "Fire suppression" },
  { value: "multiple", label: "Multiple / combination" },
  { value: "other", label: "Other" }
] as const;

export const PRICING_MODEL_OPTIONS = [
  { value: "per-pallet", label: "Per pallet" },
  { value: "per-sqm", label: "Per sqm" },
  { value: "per-ton", label: "Per ton" },
  { value: "fixed-monthly", label: "Fixed monthly" },
  { value: "custom", label: "Custom / hybrid" }
] as const;

export const MIN_STORAGE_DURATION_OPTIONS = [
  { value: "1-month", label: "1 month" },
  { value: "3-months", label: "3 months" },
  { value: "6-months", label: "6 months" },
  { value: "12-months", label: "12 months" },
  { value: "flexible", label: "Flexible" }
] as const;
