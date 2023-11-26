import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import NavigationMenu from "./MenuComponent";
import NavigationMenuList from "./List";
import NavigationMenuTrigger, { navigationMenuTriggerStyle } from "./Trigger";
import NavigationMenuContent from "./Content";

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
