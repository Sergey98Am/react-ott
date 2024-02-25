import React, { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./controls/CarouselArrowButtons";
import ctl from "@netlify/classnames-template-literals";
import Typography from "../ui/Typography";
import Spinner from "@/components/icons/Spinner";

// When there is a class reusing, used ctl()

const arrowClasses = ctl(
  `rounded-full
    bg-dark-black-08
    p-3
    2xl:p-3.5`,
);

const iconClasses = ctl(
  `w-5
    h-5
    2xl:w-6
    2xl:h-6`,
);

type PropType = {
  children: ReactNode;
  isLoading?: boolean;
  options?: EmblaOptionsType;
  headingTitle: string;
  headingDescription?: string;
};

const CarouselOutsideTopArrows: React.FC<PropType> = (props) => {
  const { children, isLoading = false, options, headingTitle } = props;

  const customOptions: EmblaOptionsType = {
    align: "start",
    containScroll: "trimSnaps",
    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...customOptions,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="space-y-4 xl:space-y-5 2xl:space-y-7">
      {/* Heading */}
      <div className="flex items-center justify-between">
        {/* Title */}
        <Typography
          variant="h5"
          className="flex items-center space-x-0.5 text-sm text-grey-grey-60 sm:text-base 2xl:space-x-1 2xl:text-lg"
        >
          {headingTitle}
        </Typography>

        {/* Desktop/laptop controls */}
        <div className="arrows relative flex space-x-2.5">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className={arrowClasses}
            iconClassName={iconClasses}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className={arrowClasses}
            iconClassName={iconClasses}
          />
        </div>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner className="h-12 w-12 animate-spin lg:h-16 lg:w-16" />
        </div>
      ) : (
        // Carousel wrapper
        <div className="overflow-hidden" ref={emblaRef}>
          {children}
        </div>
      )}
    </div>
  );
};

export default CarouselOutsideTopArrows;
