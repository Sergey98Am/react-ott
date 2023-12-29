import React, { ReactNode, useState } from "react";
import Spinner from "@/components/icons/Spinner";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import ctl from "@netlify/classnames-template-literals";
import "swiper/css";
import "swiper/css/scrollbar";

interface OneItemSliderProps {
  children: ReactNode;
  isLoading?: boolean;
  slidesPerView?: number;
}

const OneItemSlider: React.FC<OneItemSliderProps & SwiperProps> = ({
  children,
  isLoading = false,
  ...settings
}) => {
  const sliderContainer = ctl(
    `one-item-slider-container 
    flex 
    flex-col 
    gap-y-10
    xl:gap-y-[60px]
    2xl:gap-y-20`,
  );

  const bulletClasses = ctl(
    `flex 
    bg-dark-black-20 
    w-5 
    h-1 
    cursor-pointer 
    rounded`,
  );

  const bulletActiveClass = "bg-primary-red-45 w-6";
  const arrowIcons = "h-7 w-7";

  const arrowButtons = ctl(
    `cursor-pointer 
    rounded-lg 
    bg-dark-black-06 
    border
    border-dark-black-12
    p-3.5`,
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

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

  const sliderOptions: SwiperProps = {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    spaceBetween: 20,
    slidesPerView: 1,
    cssMode: false,
    pagination: {
      el: paginationEl,
      bulletClass: bulletClasses,
      bulletActiveClass: bulletActiveClass,
      clickable: true,
    },
    navigation: {
      prevEl,
      nextEl,
      disabledClass: "text-dark-black-30",
    },
    ...settings,
  };

  return (
    <div className={sliderContainer}>
      <div>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner className="h-12 w-12 animate-spin lg:h-16 lg:w-16" />
          </div>
        ) : (
          <div className="relative">
            <Swiper {...sliderOptions}>{children}</Swiper>
            <div className={arrowsAndPaginationClasses}>
              <div
                className="swiper-button-prev flex"
                ref={(node) => setPrevEl(node)}
              >
                <button className={arrowButtons}>
                  <ArrowLeftIcon className={arrowIcons} />
                </button>
              </div>
              <div
                className="pagination flex gap-[3px]"
                ref={(node) => setPaginationEl(node)}
              ></div>
              <div
                className="swiper-button-next flex"
                ref={(node) => setNextEl(node)}
              >
                <button className={arrowButtons}>
                  <ArrowRightIcon className={arrowIcons} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { SwiperSlide as Slide };
export default OneItemSlider;
