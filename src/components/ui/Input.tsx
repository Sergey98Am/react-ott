import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-dark-black-15 bg-dark-black-08 p-4 font-normal ring-offset-dark-black-08 file:border-0 file:bg-dark-black-08 placeholder:text-grey-grey-60  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-black-20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
