// @/components/ui/badge.tsx
import * as React from "react";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-primary hover:bg-primary/80 text-primary-foreground",
    secondary: "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
    destructive: "bg-destructive hover:bg-destructive/90 text-destructive-foreground",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground"
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className = "", variant = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`
          inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
          transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          ${variantStyles[variant]}
          ${className}
        `}
                {...props}
            />
        );
    }
);

Badge.displayName = "Badge";

export { Badge };