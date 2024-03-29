import CustomRating from "@/components/ui/CustomRating";
import Typography from "@/components/ui/Typography";
import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";

const ratingsArr = [
  {
    title: "Imdb",
    stars: 4,
  },
  {
    title: "Streamvibe",
    stars: 5,
  },
];

interface RatingProps {
  fieldLabelClasses: string;
  fieldContentDistanceClasses: string;
  labelIconClasses: string;
}

const Ratings: React.FC<RatingProps> = ({
  fieldLabelClasses,
  fieldContentDistanceClasses,
  labelIconClasses,
}) => {
  return (
    <div className={`ratings ${fieldContentDistanceClasses}`}>
      {/* Label */}
      <Typography variant="h5" className={fieldLabelClasses}>
        <span>
          <StarIcon className={labelIconClasses} />
        </span>
        <span>Ratings</span>
      </Typography>

      {/* Single movie or show rating */}
      <div className="grid grid-cols-2 gap-4">
        {ratingsArr.map((rating, index) => (
          // Rating item
          <div
            key={index}
            className="w-full flex-shrink-0 basis-1/2 space-y-0.5 rounded-lg border border-dark-black-15 bg-dark-black-08 p-3 text-start hover:bg-dark-black-10 sm:p-3.5 2xl:p-4"
          >
            {/* Title */}
            <Typography
              variant="h4"
              className="text-sm xl:text-base 2xl:text-xl"
            >
              {rating.title}
            </Typography>

            {/* Stars */}
            <div className="flex items-center space-x-1">
              <CustomRating
                className="max-w-[90px] 2xl:max-w-[120px]"
                value={rating.stars}
                readOnly
              />
              <span className="text-sm font-medium 2xl:text-xl">
                {rating.stars}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
