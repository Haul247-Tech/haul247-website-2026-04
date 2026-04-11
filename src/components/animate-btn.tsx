import Link from "next/link";
import type { ComponentProps, CSSProperties, ReactNode } from "react";

type ColorProps = {
  /** Border color (CSS color, e.g. `#21445B` or `hsl(...)`) */
  borderColor: string;
  /** Default text color */
  color: string;
  /** Text color on hover */
  hoverColor: string;
  /** Text color while pressed / `:active`; defaults to `hoverColor` */
  activeColor?: string;
  /** Slide-in fill color; defaults to `borderColor` */
  hoverBgColor?: string;
  /** Stretch to parent width (e.g. equal columns in a grid) */
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

export type AnimateBtnAsLink = ColorProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: ComponentProps<typeof Link>["href"];
  };

export type AnimateBtnAsButton = ColorProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

export type AnimateBtnProps = AnimateBtnAsLink | AnimateBtnAsButton;

const colorKeys = [
  "borderColor",
  "color",
  "hoverColor",
  "activeColor",
  "hoverBgColor",
  "fullWidth",
  "className",
  "children"
] as const;

export function AnimateBtn(props: AnimateBtnProps) {
  const {
    borderColor,
    color,
    hoverColor,
    activeColor = hoverColor,
    hoverBgColor = borderColor,
    fullWidth = false,
    className = "",
    children
  } = props;

  const style = {
    "--ab-text": color,
    "--ab-hover-text": hoverColor,
    "--ab-active-text": activeColor,
    "--ab-fill": hoverBgColor,
    borderColor
  } as CSSProperties;

  const layoutClasses = fullWidth
    ? "flex w-full min-w-0 min-h-[44px] items-center justify-between overflow-hidden border border-solid px-5 text-sm font-medium transition-colors duration-300 md:text-xs lg:text-sm"
    : "inline-flex min-h-[52px] min-w-[238px] items-center justify-between overflow-hidden border border-solid px-5 text-sm font-medium transition-colors duration-300 md:min-w-[192px] md:text-xs lg:min-w-[250px] lg:text-sm";

  const classes = [
    "group relative",
    layoutClasses,
    "text-[var(--ab-text)] hover:text-[var(--ab-hover-text)] active:text-[var(--ab-active-text)]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ab-fill)]",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span
        className="absolute inset-0 -z-0 origin-left scale-x-0 bg-[var(--ab-fill)] transition-transform duration-300 ease-out group-hover:scale-x-100 group-active:scale-x-100"
        aria-hidden
      />
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 text-2xl leading-none" aria-hidden>
        →
      </span>
    </>
  );

  const href = "href" in props ? props.href : undefined;
  if (href != null && href !== "") {
    const linkProps = { ...(props as AnimateBtnAsLink) };
    for (const k of colorKeys) {
      delete (linkProps as Record<string, unknown>)[k];
    }
    const { href: linkHref, ...forward } = linkProps;
    return (
      <Link href={linkHref} className={classes} style={style} {...forward}>
        {inner}
      </Link>
    );
  }

  const btnProps = { ...(props as AnimateBtnAsButton) };
  for (const k of colorKeys) {
    delete (btnProps as Record<string, unknown>)[k];
  }
  const { type = "button", ...forward } = btnProps;
  return (
    <button type={type} className={classes} style={style} {...forward}>
      {inner}
    </button>
  );
}
