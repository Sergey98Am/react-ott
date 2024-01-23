import ReviewCard from "@/components/cards/ReviewCard";
import CarouselOutsideBottomControls from "@/components/carousels/CarouselOutsideBottomControls";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import { PlusIcon } from "@heroicons/react/24/solid";
import ctl from "@netlify/classnames-template-literals";
import React from "react";

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

const fieldContentDistanceClasses = ctl(
  `flex 
  flex-col 
  gap-y-6
  sm:gap-y-7
  2xl:gap-y-10`,
);

const carouselItemsParentClasses = ctl(
  `backface-hidden 
  flex 
  touch-pan-y
  ml-[-16px] 
  2xl:ml-[-20px]`,
);

const Reviews: React.FC<ReviewsProps> = ({
  infoSectionClasses,
  fieldLabelClasses,
  reviews,
}) => {
  return (
    <div
      className={`${infoSectionClasses} ${fieldContentDistanceClasses} reviews`}
    >
      {/* Label */}
      <div className="heading flex items-center justify-between">
        <Typography variant="body" className={fieldLabelClasses}>
          Reviews
        </Typography>

        <Button variant="dark" className="gap-1 !py-3.5 md:w-auto">
          <PlusIcon className="h-6 w-6 2xl:h-7 2xl:w-7" />
          <span>Add Your Review</span>
        </Button>
      </div>

      <CarouselOutsideBottomControls>
        <div className={carouselItemsParentClasses}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative w-full min-w-0 flex-shrink-0 flex-grow-0 overflow-hidden pl-4 md:w-1/2 2xl:pl-5"
            >
              <ReviewCard
                key={index}
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