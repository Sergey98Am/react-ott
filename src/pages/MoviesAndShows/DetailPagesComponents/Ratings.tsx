import { Badge } from "@/components/ui/Badge";
import CustomRating from "@/components/ui/CustomRating";
import Typography from "@/components/ui/Typography";
import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";

interface RatingProps {
  fieldLabelClasses: string;
  fieldContentDistanceClasses: string;
  labelIconClasses: string;
}

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

const Ratings: React.FC<RatingProps> = ({
  fieldLabelClasses,
  fieldContentDistanceClasses,
  labelIconClasses,
}) => {
  return (
    <div className={`ratings ${fieldContentDistanceClasses}`}>
      {/* Label */}
      <Typography variant="body" className={fieldLabelClasses}>
        <span>
          <StarIcon className={labelIconClasses} />
        </span>
        <span>Ratings</span>
      </Typography>

      <div className="flex gap-4">
        {ratingsArr.map((rating, index) => (
          <Badge
            key={index}
            variant="circle"
            className="w-full flex-shrink-0 basis-1/2 gap-0.5 rounded-lg p-3 text-start sm:p-3.5 2xl:p-4"
          >
            <h4 className="text-sm font-bold sm:text-base 2xl:text-xl">
              {rating.title}
            </h4>
            <div className="flex items-center space-x-1">
              <CustomRating
                className="max-w-[90px] 2xl:max-w-[120px]"
                value={rating.stars}
                readOnly
              />
              <span className="text-sm 2xl:text-xl">{rating.stars}</span>
            </div>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
