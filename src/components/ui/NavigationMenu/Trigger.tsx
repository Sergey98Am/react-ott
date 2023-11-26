import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const navigationMenuTriggerStyle = cva(
  "flex items-center justify-center rounded-md px-4 py-3 2xl:px-6 2xl:py-3.5 2xl:text-lg text-sm font-medium transition-colors hover:text-absolute-white focus:bg-dark-black-10 focus:text-absolute-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 active:text-absolute-white",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Trigger>
));

export default NavigationMenuTrigger;
