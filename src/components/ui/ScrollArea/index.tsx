import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import ScrollArea from "./ScrollAreaComponent";
import ScrollBar from "./ScrollBar";

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
