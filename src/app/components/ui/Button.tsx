import React from "react";
import { cn } from "../../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "outline-white";
type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Class names shared between native <button> and <a> renderings.
 * Brand green darkened to #15803D so white text meets WCAG AA (4.5:1).
 * Removed hover:scale on primary/accent — cards already lift on hover and
 * the double-bounce stack was reading as AI slop.
 */
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#15803D] text-white hover:bg-[#14532d] shadow-md hover:brightness-110",
  secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0F172A]",
  accent: "bg-[#15803D] text-white hover:bg-[#14532d] shadow-md hover:brightness-110",
  ghost: "bg-transparent text-[#15803D] hover:bg-[#15803D]/10",
  "outline-white": "border-2 border-white text-white hover:bg-white hover:text-[#0F172A]",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-12 px-6 py-2",
  sm: "h-9 px-3 text-xs",
  lg: "h-14 px-8 text-lg",
  icon: "h-10 w-10",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export const buttonClassNames = (
  variant: ButtonVariant = "primary",
  size: ButtonSize = "default",
  className?: string
) => cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (props, ref) => {
    const { variant = "primary", size = "default", className, as, ...rest } = props as ButtonAsAnchor;

    const classes = buttonClassNames(variant, size, className);

    if (as === "a") {
      const anchorRest = rest as Omit<ButtonAsAnchor, "as" | "variant" | "size" | "className">;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorRest}
        />
      );
    }

    const buttonRest = rest as Omit<ButtonAsButton, "as" | "variant" | "size" | "className">;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...buttonRest}
      />
    );
  }
);

Button.displayName = "Button";
