import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import Typography from "./Typography";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("p-4", className)}
    style={{
      borderBottom: "1px solid transparent",
      borderImage:
        "linear-gradient(90deg, rgba(229, 0, 0, 0.00) 0%, #E50000 16.67%, rgba(229, 0, 0, 0.00) 100%)",
      borderImageSlice: 1,
    }}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group relative flex flex-1 items-center justify-between text-2xl font-medium transition-all",
        className,
      )}
      {...props}
    >
      {children}
      <PlusIcon className="h-6 w-6 shrink-0  transition-transform duration-200 group-data-[state=open]:hidden 2xl:h-[30px] 2xl:w-[30px]" />
      <MinusIcon className="h-6 w-6 shrink-0  transition-transform duration-200 group-data-[state=closed]:hidden 2xl:h-[30px] 2xl:w-[30px]" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <Typography variant="body" className={cn("pt-0", className)}>
      {children}
    </Typography>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
