import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-[2520px] px-4 xl:px-20 2xl:px-40",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export default Container;
