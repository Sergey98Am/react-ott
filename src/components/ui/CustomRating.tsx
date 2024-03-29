import { cn } from "@/lib/utils";
import { Rating, RatingProps } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const StarDrawing = (
  <path
    d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
      C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
      c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
      c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25
      c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657
      C63.951,25.771,64.131,24.987,63.893,24.277z"
  />
);

const customStyles = {
  itemShapes: StarDrawing,
  activeFillColor: "var(--red-45)",
  inactiveFillColor: "var(--grey-60)",
};

interface CustomRatingProps extends RatingProps {
  className?: string;
  value: number;
}

const CustomRating: React.FC<CustomRatingProps> = ({
  className,
  value,
  ...rest
}) => {
  return (
    <Rating
      className={cn(
        "flex max-w-[70px] items-center 2xl:max-w-[90px]",
        className,
      )}
      value={value}
      itemStyles={customStyles}
      {...rest}
    />
  );
};

export default CustomRating;
