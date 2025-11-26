import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        secondary:
          "border-transparent bg-zinc-800 text-zinc-300",
        destructive:
          "border-transparent bg-red-500/10 text-red-400",
        outline: "border-zinc-700 text-zinc-300",
        purple:
          "border-transparent bg-purple-500/10 text-purple-400 border-purple-500/20",
        blue:
          "border-transparent bg-blue-500/10 text-blue-400 border-blue-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
