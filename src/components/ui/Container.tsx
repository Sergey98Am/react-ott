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
        className={cn("mx-auto max-w-[1760px] px-4 xl:px-20", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export default Container;
