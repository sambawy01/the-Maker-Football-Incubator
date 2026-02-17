import React from "react";
import { cn } from "../../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline-white";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variants = {
      primary: "bg-[#16A34A] text-white hover:bg-[#14532d] shadow-md hover:scale-[1.02]",
      secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0F172A]",
      accent: "bg-[#D97706] text-white hover:bg-[#b45309] shadow-md hover:scale-[1.02]",
      ghost: "bg-transparent text-[#16A34A] hover:bg-[#16A34A]/10",
      "outline-white": "border-2 border-white text-white hover:bg-white hover:text-[#0F172A]"
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 px-3 text-xs",
      lg: "h-14 px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
