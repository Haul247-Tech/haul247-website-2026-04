export const TRUCK_TYPE_OPTIONS = [
  { value: "flatbed", label: "Flatbed" },
  { value: "box-truck", label: "Box truck" },
  { value: "trailer-semitrailer", label: "Trailer / Semitrailer" },
  { value: "tanker", label: "Tanker" },
  { value: "refrigerated", label: "Refrigerated" },
  { value: "tipper", label: "Tipper" },
  { value: "other", label: "Other" }
] as const;

export const OPERATING_STATE_OPTIONS = [
  { value: "lagos", label: "Lagos" },
  { value: "ogun", label: "Ogun" },
  { value: "oyo", label: "Oyo" },
  { value: "fct", label: "FCT" },
  { value: "kano", label: "Kano" },
  { value: "rivers", label: "Rivers" },
  { value: "delta", label: "Delta" },
  { value: "edo", label: "Edo" },
  { value: "kaduna", label: "Kaduna" },
  { value: "nationwide", label: "Nationwide" },
  { value: "other", label: "Other" }
] as const;

export const NUMBER_OF_TRUCKS_OPTIONS = [
  { value: "1", label: "1" },
  { value: "2-5", label: "2 - 5" },
  { value: "6-10", label: "6 - 10" },
  { value: "11-20", label: "11 - 20" },
  { value: "21-50", label: "21 - 50" },
  { value: "50-plus", label: "50+" }
] as const;
