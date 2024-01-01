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
import Spinner from "@/components/icons/Spinner";

type PropType = {
  children: ReactNode;
  isLoading?: boolean;
  options?: EmblaOptionsType;
};

const sliderContainer = ctl(
  `one-item-slider-container 
    flex 
    flex-col 
    gap-y-10
    xl:gap-y-[60px]
    2xl:gap-y-20`,
);

const arrowsAndPaginationClasses = ctl(
  `arrows-and-pagination
    absolute
    bottom-0
    left-0
    right-0
    z-10
    hidden
    items-center 
    justify-between 
    gap-x-4 
    md:flex
    inset-x-6 
    bottom-4 
    md:inset-x-10
    md:bottom-4 
    2xl:inset-x-12
    2xl:bottom-5`,
);

const CarouselDefault: React.FC<PropType> = (props) => {
  const { children, isLoading = false, options } = props;

  const customOptions: EmblaOptionsType = {
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

  return (
    <div className={sliderContainer}>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner className="h-12 w-12 animate-spin lg:h-16 lg:w-16" />
        </div>
      ) : (
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            {children}
          </div>
          <div className={arrowsAndPaginationClasses}>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className="bg-dark-black-06"
            />
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
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className="bg-dark-black-06"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselDefault;
