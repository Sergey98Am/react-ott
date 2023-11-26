import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-absolute-white", {
  variants: {
    variant: {
      h1: "text-4xl xl:text-6xl 2xl:text-7xl",
      h2: "text-3xl xl:text-4xl 2xl:text-5xl",
      h3: "text-lg xl:text-xl 2xl:text-3xl",
      body: "text-grey-grey-60 text-sm 2xl:text-lg",
      span: "",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  span: "span",
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, asChild, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
