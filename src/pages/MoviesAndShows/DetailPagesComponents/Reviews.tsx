import React from "react";
import ReviewCard from "@/components/cards/ReviewCard";
import CarouselOutsideBottomControls from "@/components/carousels/CarouselOutsideBottomControls";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { PlusIcon } from "@heroicons/react/24/solid";

interface UserCountry {
  name: string;
}

interface User {
  first_name: string;
  last_name: string;
  countries: UserCountry;
}

interface Review {
  description: string;
  rating: number;
  users: User;
}

interface ReviewsProps {
  infoSectionClasses: string;
  fieldLabelClasses: string;
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({
  infoSectionClasses,
  fieldLabelClasses,
  reviews,
}) => {
  return (
    <div
      className={cn(
        `reviews space-y-6 sm:space-y-7 2xl:space-y-10 ${infoSectionClasses}`,
      )}
    >
      {/* Label */}
      <div className="heading flex items-center justify-between">
        <Typography variant="h5" className={fieldLabelClasses}>
          Reviews
        </Typography>

        <Button variant="dark" className="space-x-1 !py-3.5 md:w-auto">
          <PlusIcon className="h-6 w-6 2xl:h-7 2xl:w-7" />
          <span>Add Your Review</span>
        </Button>
      </div>

      {/* Single movie or show reviews */}
      <CarouselOutsideBottomControls>
        <div className="backface-hidden ml-[-16px] flex touch-pan-y 2xl:ml-[-20px]">
          {reviews.map((review, index) => (
            // Review item
            <div
              key={index}
              className="relative w-full min-w-0 flex-shrink-0 flex-grow-0 overflow-hidden pl-4 md:w-1/2 2xl:pl-5"
            >
              <ReviewCard
                key={index}
                className="h-full"
                userName={`${review.users.first_name} ${review.users.last_name}`}
                userCountry={review.users.countries.name}
                reviewRating={review.rating}
                reviewDescription={review.description}
              />
            </div>
          ))}
        </div>
      </CarouselOutsideBottomControls>
    </div>
  );
};

export default Reviews;
