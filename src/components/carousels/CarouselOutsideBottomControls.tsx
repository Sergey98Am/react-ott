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

const CarouselOutsideBottomControls: React.FC<PropType> = (props) => {
  const { children, isLoading = false, options } = props;

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

  const arrowsAndPaginationClasses = ctl(
    `arrows-and-pagination
    relative 
    flex
    w-full 
    items-center 
    justify-center 
    gap-x-2.5`,
  );

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

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner className="h-12 w-12 animate-spin lg:h-16 lg:w-16" />
        </div>
      ) : (
        <div
          className="space-y-6 overflow-hidden sm:space-y-7 2xl:space-y-10"
          ref={emblaRef}
        >
          {children}

          <div className={arrowsAndPaginationClasses}>
            <PrevButton
              onClick={onPrevButtonClick}
              className={arrowClasses}
              iconClassName={iconClasses}
              disabled={prevBtnDisabled}
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
              className={arrowClasses}
              iconClassName={iconClasses}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselOutsideBottomControls;
