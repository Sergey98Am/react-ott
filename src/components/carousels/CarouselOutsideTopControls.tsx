import React, { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./controls/CarouselDotButton";
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

const CarouselOutsideTopControls: React.FC<PropType> = (props) => {
  const {
    children,
    isLoading = false,
    options,
    headingTitle,
    headingDescription,
  } = props;

  const customOptions: EmblaOptionsType = {
    align: "start",
    containScroll: "trimSnaps",
    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...customOptions,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const sliderContainer = ctl(
    `outside-controls-carousel-container 
    flex 
    flex-col 
    gap-y-10
    xl:gap-y-[60px]
    2xl:gap-y-20`,
  );

  const headingClasses = ctl(
    `heading 
    flex 
    ${headingDescription ? "items-end" : "items-center"}
    justify-between`,
  );

  const infoClasses = ctl(
    `info 
    flex 
    flex-col 
    gap-y-2
    xl:gap-y-2.5
    2xl:gap-y-3.5`,
  );

  const arrowsAndPaginationClasses = ctl(
    `arrows-and-pagination
    relative 
    hidden
    max-w-xs 
    items-center 
    justify-center 
    gap-x-4 
    rounded-xl 
    border 
    border-dark-black-12 
    bg-dark-black-06 
    p-4
    lg:flex`,
  );

  return (
    <div className={sliderContainer}>
      {/* Heading */}
      <div className={headingClasses}>
        {/* Title and description */}
        <div className={infoClasses}>
          <Typography variant="h2" className="font-bold">
            {headingTitle}
          </Typography>
          {headingDescription && (
            <Typography variant="body">{headingDescription}</Typography>
          )}
        </div>
        {/* Desktop/laptop arrows and pagination */}
        <div className={arrowsAndPaginationClasses}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <div className="pagination flex gap-[3px]">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={
                  index === selectedIndex ? "w-6 bg-primary-red-45" : ""
                }
              />
            ))}
          </div>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner className="h-12 w-12 animate-spin lg:h-16 lg:w-16" />
        </div>
      ) : (
        <div className="overflow-hidden" ref={emblaRef}>
          {children}
          {/* Mobile pagination */}
          <div className="flex items-center justify-center lg:hidden">
            <div className="pagination-small-screens mt-6 flex w-fit bg-dark-black-20">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={
                    index === selectedIndex ? "w-6 bg-primary-red-45" : ""
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselOutsideTopControls;
