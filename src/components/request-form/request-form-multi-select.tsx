"use client";

import { useId, useMemo } from "react";
import Select, {
  type MultiValue,
  type StylesConfig
} from "react-select";

export type RequestFormMultiSelectOption = { value: string; label: string };

type RequestFormMultiSelectProps = {
  options: readonly RequestFormMultiSelectOption[];
  value: string[];
  onChange: (next: string[]) => void;
  onBlur: () => void;
  placeholder?: string;
  "aria-invalid"?: boolean;
  /** Accessible label; forwarded to react-select `aria-label`. */
  "aria-label"?: string;
};

const border = "#c9ced3";
const textMuted = "#607481";
const brand = "#1C4863";
const brandDark = "#21445B";

function buildStyles(
  invalid: boolean
): StylesConfig<RequestFormMultiSelectOption, true> {
  const bottom = invalid ? "#dc2626" : border;
  return {
    control: (base, state) => ({
      ...base,
      minHeight: 42,
      border: "none",
      borderRadius: 0,
      borderBottom: `1px solid ${state.isFocused ? brand : bottom}`,
      boxShadow: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      "&:hover": {
        borderBottom: `1px solid ${state.isFocused ? brand : bottom}`
      }
    }),
    valueContainer: (base) => ({
      ...base,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 4,
      paddingBottom: 4
    }),
    placeholder: (base) => ({
      ...base,
      color: textMuted,
      fontWeight: 300,
      fontSize: 14
    }),
    input: (base) => ({
      ...base,
      color: textMuted,
      fontWeight: 300,
      fontSize: 14
    }),
    singleValue: (base) => ({ ...base, color: textMuted, fontSize: 14, fontWeight: 300 }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#e2e8f0",
      borderRadius: 4
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: brand,
      fontSize: 12,
      fontWeight: 500
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: brand,
      ":hover": {
        backgroundColor: "#cbd5e1",
        color: brandDark
      }
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 4,
      fontSize: 14,
      overflow: "hidden",
      boxShadow: "0 10px 40px rgba(9, 24, 34, 0.12)",
      border: `1px solid ${border}`
    }),
    menuList: (base) => ({ ...base, padding: 4 }),
    menuPortal: (base) => ({ ...base, zIndex: 10000 }),
    option: (base, state) => ({
      ...base,
      fontWeight: 300,
      cursor: "pointer",
      backgroundColor: state.isSelected
        ? brandDark
        : state.isFocused
          ? "#f1f5f9"
          : "white",
      color: state.isSelected ? "#fff" : textMuted
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: textMuted,
      padding: 6,
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : undefined,
      transition: "transform 0.2s ease"
    }),
    clearIndicator: (base) => ({
      ...base,
      color: textMuted,
      ":hover": { color: brandDark }
    })
  };
}

export function RequestFormMultiSelect({
  options,
  value,
  onChange,
  onBlur,
  placeholder = "Select…",
  "aria-invalid": ariaInvalid,
  "aria-label": ariaLabel
}: RequestFormMultiSelectProps) {
  const reactId = useId();
  const instanceId = useMemo(() => reactId.replace(/:/g, ""), [reactId]);
  const inputId = `${instanceId}-input`;

  const selected: MultiValue<RequestFormMultiSelectOption> = useMemo(
    () => options.filter((o) => value.includes(o.value)),
    [options, value]
  );

  const styles = useMemo(() => buildStyles(Boolean(ariaInvalid)), [ariaInvalid]);

  return (
    <Select<RequestFormMultiSelectOption, true>
      instanceId={instanceId}
      inputId={inputId}
      aria-invalid={ariaInvalid}
      aria-label={ariaLabel}
      isMulti
      isClearable
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      options={[...options]}
      value={selected}
      onChange={(newValue) => {
        onChange((newValue ?? []).map((o) => o.value));
      }}
      onBlur={onBlur}
      placeholder={placeholder}
      classNamePrefix="haul-rs"
      styles={styles}
      menuPortalTarget={
        typeof document !== "undefined" ? document.body : undefined
      }
      menuPosition="fixed"
    />
  );
}
