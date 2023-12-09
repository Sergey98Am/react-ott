import { ReactNode } from "react";
import Typography from "@/components/ui/Typography";
import Spinner from "@/components/icons/Spinner";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import ctl from "@netlify/classnames-template-literals";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

interface MultiItemsSliderProps {
  children: ReactNode;
  isLoading?: boolean;
  slidesPerView?: number;
}

const MultiItemsSlider: React.FC<MultiItemsSliderProps & SwiperProps> = ({
  children,
  isLoading = false,
  slidesPerView = 5,
  ...settings
}) => {
  const sliderContainer = ctl(
    `multi-items-slider-container 
    flex 
    flex-col 
    gap-y-10
    xl:gap-y-[60px]
    2xl:gap-y-20`,
  );

  const headingClasses = ctl(
    `heading 
    flex 
    items-end 
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
    bg-dark-black-12 
    p-3.5`,
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

  const sliderOptions: SwiperProps = {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    spaceBetween: 20,
    slidesPerView: "auto",
    cssMode: true,
    pagination: {
      el: ".pagination-small-screens",
      bulletClass: bulletClasses,
      bulletActiveClass: bulletActiveClass,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
      disabledClass: "text-dark-black-30",
    },
    breakpoints: {
      1024: {
        pagination: {
          el: ".pagination",
          bulletClass: bulletClasses,
          bulletActiveClass: bulletActiveClass,
          clickable: true,
        },
        slidesPerView: slidesPerView,
      },
      1536: {
        pagination: {
          el: ".pagination",
          bulletClass: bulletClasses,
          bulletActiveClass: bulletActiveClass,
          clickable: true,
        },
        slidesPerView: slidesPerView,
        spaceBetween: 30,
      },
    },
    ...settings,
  };

  return (
    <div className={sliderContainer}>
      {/* Heading */}
      <div className={headingClasses}>
        {/* Title and description */}
        <div className={infoClasses}>
          <Typography variant="h2">
            Explore our wide variety of categories
          </Typography>
          <Typography variant="body">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </Typography>
        </div>
        {/* Desktop/laptop arrows and pagination */}
        <div className={arrowsAndPaginationClasses}>
          <div className="swiper-button-prev flex">
            <button className={arrowButtons}>
              <ArrowLeftIcon className={arrowIcons} />
            </button>
          </div>
          <div className="pagination flex gap-[3px]"></div>
          <div className="swiper-button-next flex">
            <button className={arrowButtons}>
              <ArrowRightIcon className={arrowIcons} />
            </button>
          </div>
        </div>
      </div>
      <div>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner className="h-12 w-12 animate-spin lg:h-16 lg:w-16" />
          </div>
        ) : (
          <>
            <Swiper {...sliderOptions}>{children}</Swiper>
            {/* Mobile pagination */}
            <div className="flex items-center justify-center">
              <div className="pagination-small-screens mt-6 flex w-fit bg-dark-black-20"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { SwiperSlide as Slide };
export default MultiItemsSlider;
