import { ReactNode, useState } from "react";
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
  headingTitle: string;
  headingDescription?: string;
}

const MultiItemsSlider: React.FC<MultiItemsSliderProps & SwiperProps> = ({
  children,
  isLoading = false,
  slidesPerView = 5,
  headingTitle,
  headingDescription,
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

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);
  const [mobilePaginationEl, setMobilePaginationEl] =
    useState<HTMLElement | null>(null);
  // console.log(prevEl);

  const sliderOptions: SwiperProps = {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    spaceBetween: 20,
    slidesPerView: "auto",
    cssMode: true,
    pagination: {
      el: mobilePaginationEl,
      bulletClass: bulletClasses,
      bulletActiveClass: bulletActiveClass,
      clickable: true,
    },
    navigation: {
      prevEl,
      nextEl,
      disabledClass: "text-dark-black-30",
    },
    breakpoints: {
      1024: {
        pagination: {
          el: paginationEl,
          bulletClass: bulletClasses,
          bulletActiveClass: bulletActiveClass,
          clickable: true,
        },
        slidesPerView: slidesPerView,
        cssMode: false,
      },
      1536: {
        pagination: {
          el: paginationEl,
          bulletClass: bulletClasses,
          bulletActiveClass: bulletActiveClass,
          clickable: true,
        },
        slidesPerView: slidesPerView,
        spaceBetween: 30,
        mousewheel: true,
        cssMode: false,
      },
    },
    ...settings,
  };

  return (
    <div className={sliderContainer}>
      {/* <div ref={ref}>Text</div> */}
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
            // ref={nextEl}
          >
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
              <div
                className="pagination-small-screens mt-6 flex w-fit bg-dark-black-20"
                ref={(node) => setMobilePaginationEl(node)}
              ></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { SwiperSlide as Slide };
export default MultiItemsSlider;
