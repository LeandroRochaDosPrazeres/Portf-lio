"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import { forwardRef, ReactNode, useRef, useCallback } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  magnetic?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonVariantsOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  magnetic?: boolean;
  className?: string;
}

const springConfig = { stiffness: 150, damping: 15 };

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25",
  ghost: "bg-transparent hover:bg-card text-foreground",
  outline:
    "border-2 border-border bg-transparent hover:bg-card text-foreground hover:border-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  magnetic = false,
  className,
}: ButtonVariantsOptions = {}) {
  return cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-ring disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    magnetic && "magnetic-btn",
    className,
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      magnetic = false,
      icon,
      iconPosition = "left",
      className,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    // Use motion values + springs instead of state to avoid re-renders
    const motionX = useMotionValue(0);
    const motionY = useMotionValue(0);
    const springX = useSpring(motionX, springConfig);
    const springY = useSpring(motionY, springConfig);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      motionX.set(x * 0.15);
      motionY.set(y * 0.15);
    }, [magnetic, motionX, motionY]);

    const handleMouseLeave = useCallback(() => {
      motionX.set(0);
      motionY.set(0);
    }, [motionX, motionY]);

    return (
      <motion.button
        ref={magnetic ? buttonRef : ref}
        className={buttonVariants({ variant, size, magnetic, className })}
        style={magnetic ? { x: springX, y: springY } : undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
