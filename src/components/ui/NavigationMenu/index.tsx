import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import NavigationMenuList from "./NavigationMenuList";
import NavigationMenuTrigger, {
  navigationMenuTriggerStyle,
} from "./NavigationMenuTrigger";
import NavigationMenuContent from "./NavigationMenuContent";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "flex max-w-max flex-1 items-center justify-center rounded-xl border-[3px] border-dark-black-12 bg-dark-black-06 2xl:border-4",
      className,
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
};
