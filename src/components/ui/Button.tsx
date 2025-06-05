import { clsx } from "clsx";
import { forwardRef } from "react";

type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", children, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={disabled}
                className={clsx(
                    "border rounded-3xl py-2 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105",
                    " bg-[var(--header-bg)] text-[var(--header-text)] border-b border-[var(--border-color)]",
                    className
                )}
                aria-disabled={disabled}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;