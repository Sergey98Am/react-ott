import { useParams } from "react-router-dom";
import Container from "@/components/ui/Container";
import { useSingleMovie } from "@/hooks/movies/useSingleMovie";
import Spinner from "@/components/icons/Spinner";
import MediaOverlayCard from "@/components/cards/MediaOverlayCard";
import FreeTrial from "@/components/FreeTrial";
import ctl from "@netlify/classnames-template-literals";
import Typography from "@/components/ui/Typography";
import {
  CalendarIcon,
  LanguageIcon,
  Squares2X2Icon,
  StarIcon,
} from "@heroicons/react/24/outline";

const infoSectionClasses = ctl(
  `bg-dark-black-10
  border
  border-dark-black-15
  rounded-lg
  p-6
  flex
  flex-col
  gap-y-2
  sm:p-10
  sm:gap-y-2.5
  2xl:rounded-xl
  2xl:p-12
  2xl:gap-y-3.5`,
);

const fieldLabelClasses = ctl(
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

const labelIconClasses = ctl(
  `h-5
  w-5 
  2xl:h-6 
  2xl:w-6`,
);

const MovieDetail = () => {
  const params = useParams();
  const { isLoading, single_movie } = useSingleMovie(Number(params.id));

  return (
    <div className="pb-20 pt-36 md:pb-28 2xl:pt-40">
      <Container className="space-y-24 2xl:space-y-32">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner className="h-12 w-12 animate-spin lg:h-16 lg:w-16" />
          </div>
        ) : (
          <div className="space-y-14 sm:space-y-20 2xl:space-y-24">
            <MediaOverlayCard
              image={single_movie.banner}
              title={single_movie.title}
              description={single_movie.description}
            />
            <div className="info grid grid-cols-12 gap-5">
              <div className="col-span-12 flex flex-col gap-y-5 xl:col-span-8 2xl:gap-y-7">
                <div
                  className={`${infoSectionClasses} description hidden xl:!flex`}
                >
                  {/* Label */}
                  <Typography variant="body" className={fieldLabelClasses}>
                    Description
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body"
                    className={`${fieldLabelClasses} text-absolute-white`}
                  >
                    {single_movie.description}
                  </Typography>
                </div>
                <div className={`${infoSectionClasses} cast`}>
                  {/* Label */}
                  <Typography variant="body" className={fieldLabelClasses}>
                    Cast
                  </Typography>
                </div>
                <div className={`${infoSectionClasses} reviews`}>
                  {/* Label */}
                  <Typography variant="body" className={fieldLabelClasses}>
                    Reviews
                  </Typography>
                </div>
              </div>
              <div className="order-first col-span-12 flex flex-col gap-y-5 xl:order-last xl:col-span-4">
                <div
                  className={`${infoSectionClasses} description block xl:hidden`}
                >
                  {/* Label */}
                  <Typography variant="body" className={fieldLabelClasses}>
                    Description
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body"
                    className={`${fieldLabelClasses} text-absolute-white`}
                  >
                    {single_movie.description}
                  </Typography>
                </div>
                <div
                  className={`${infoSectionClasses} flex flex-col gap-y-5 sm:gap-y-6`}
                >
                  <div className="released-year">
                    {/* Label */}
                    <Typography variant="body" className={fieldLabelClasses}>
                      <span>
                        <CalendarIcon className={labelIconClasses} />
                      </span>
                      <span>Relased Year</span>
                    </Typography>
                  </div>
                  <div className="available-languages">
                    {/* Label */}
                    <Typography variant="body" className={fieldLabelClasses}>
                      <span>
                        <LanguageIcon className={labelIconClasses} />
                      </span>
                      <span>Available Languages</span>
                    </Typography>
                  </div>
                  <div className="ratings">
                    {/* Label */}
                    <Typography variant="body" className={fieldLabelClasses}>
                      <span>
                        <StarIcon className={labelIconClasses} />
                      </span>
                      <span>Ratings</span>
                    </Typography>
                  </div>
                  <div className="genres">
                    {/* Label */}
                    <Typography variant="body" className={fieldLabelClasses}>
                      <span>
                        <Squares2X2Icon className={labelIconClasses} />
                      </span>
                      <span>Genres</span>
                    </Typography>
                  </div>
                  <div className="director">
                    {/* Label */}
                    <Typography variant="body" className={fieldLabelClasses}>
                      Director
                    </Typography>
                  </div>
                  <div className="music">
                    {/* Label */}
                    <Typography variant="body" className={fieldLabelClasses}>
                      Music
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <FreeTrial />
      </Container>
    </div>
  );
};

export default MovieDetail;
