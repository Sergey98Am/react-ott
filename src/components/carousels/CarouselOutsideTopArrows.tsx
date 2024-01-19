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

  const sliderContainer = ctl(
    `outside-arrows-carousel-container 
    flex 
    flex-col 
    gap-y-4
    xl:gap-y-5
    2xl:gap-y-7`,
  );

  const headingClasses = ctl(
    `heading 
    flex 
    items-center
    justify-between`,
  );

  const arrowClasses = ctl(
    `rounded-full
    p-3
    2xl:p-3.5`,
  );

  const iconClasses = ctl(
    `w-5
    h-5
    2xl:w-6
    2xl:h-6`,
  );

  const headingTitleClasses = ctl(
    `title 
    text-sm 
    !font-medium 
    text-grey-grey-60 
    flex
    items-center
    gap-x-0.5
    sm:text-base 
    2xl:text-lg
    2xl:gap-x-1`,
  );

  return (
    <div className={sliderContainer}>
      {/* Heading */}
      <div className={headingClasses}>
        {/* Title */}
        <Typography variant="body" className={headingTitleClasses}>
          {headingTitle}
        </Typography>

        {/* Desktop/laptop arrows and pagination */}
        <div className="arrows relative flex gap-x-2.5">
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
        <div className="overflow-hidden" ref={emblaRef}>
          {children}
        </div>
      )}
    </div>
  );
};

export default CarouselOutsideTopArrows;
