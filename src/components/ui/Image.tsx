import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, Ref } from "react";

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image = forwardRef(
  (props: ImageProps, ref: Ref<HTMLImageElement>): JSX.Element => {
    const { src, alt, className, ...rest } = props;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn("rounded", className)} // Add any additional classes you want
        {...rest}
      />
    );
  },
);

export default Image;
