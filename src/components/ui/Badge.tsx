import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("w-auto text-center", {
  variants: {
    variant: {
      default:
        "bg-primary-red-45 text-absolute-white !font-semibold rounded p-2 text-xs 2xl:p-2.5 2xl:text-base 2xl:rounded-md",
      circle:
        "bg-dark-black-08 border border-dark-black-15 p-1 text-xs 2xl:text-base",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
