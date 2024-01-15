import { useParams } from "react-router-dom";
import Container from "@/components/ui/Container";
import { useSingleMovie } from "@/hooks/movies/useSingleMovie";
import Spinner from "@/components/icons/Spinner";
import MediaOverlayCard from "@/components/cards/MediaOverlayCard";
import FreeTrial from "@/components/FreeTrial";
import ctl from "@netlify/classnames-template-literals";
import Typography from "@/components/ui/Typography";
import { Squares2X2Icon, StarIcon } from "@heroicons/react/24/outline";
import Description from "../DetailPagesComponents/Description";
import ReleasedYear from "../DetailPagesComponents/ReleasedYear";
import AvailableLanguages from "../DetailPagesComponents/AvailableLanguages";

const infoSectionClasses = ctl(
  `bg-dark-black-10
  border
  border-dark-black-15
  rounded-lg
  p-6
  sm:p-10
  2xl:rounded-xl
  2xl:p-12`,
);

const fieldContentDistanceClasses = ctl(
  `flex
  flex-col 
  gap-y-2 
  sm:gap-y-2.5 
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
  console.log(single_movie);

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
                {/* Movie description */}
                <div className="description hidden xl:!flex">
                  <Description
                    infoSectionClasses={infoSectionClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    fieldLabelClasses={fieldLabelClasses}
                    single_movie={single_movie}
                  />
                </div>
                {/* Cast */}
                <div className={`${infoSectionClasses} cast`}>
                  {/* Label */}
                  <Typography variant="body" className={fieldLabelClasses}>
                    Cast
                  </Typography>
                </div>

                {/* Reviews */}
                <div className={`${infoSectionClasses} reviews`}>
                  {/* Label */}
                  <Typography variant="body" className={fieldLabelClasses}>
                    Reviews
                  </Typography>
                </div>
              </div>
              <div className="order-first col-span-12 flex flex-col gap-y-5 xl:order-last xl:col-span-4">
                {/* Movie description */}
                <div className="description block xl:hidden">
                  <Description
                    infoSectionClasses={infoSectionClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    fieldLabelClasses={fieldLabelClasses}
                    single_movie={single_movie}
                  />
                </div>

                <div
                  className={`${infoSectionClasses} flex flex-col gap-y-5 sm:gap-y-6`}
                >
                  {/* Released year */}
                  <ReleasedYear
                    fieldLabelClasses={fieldLabelClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    labelIconClasses={labelIconClasses}
                    single_movie={single_movie}
                  />
                  {/* Available languages */}
                  <AvailableLanguages
                    fieldLabelClasses={fieldLabelClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    labelIconClasses={labelIconClasses}
                    languages={single_movie.languages}
                  />

                  {/* Ratings */}
                  <div className="ratings">
                    {/* Label */}
                    <Typography variant="body" className={fieldLabelClasses}>
                      <span>
                        <StarIcon className={labelIconClasses} />
                      </span>
                      <span>Ratings</span>
                    </Typography>
                  </div>

                  {/* Genres */}
                  <div className="genres">
                    {/* Label */}
                    <Typography variant="body" className={fieldLabelClasses}>
                      <span>
                        <Squares2X2Icon className={labelIconClasses} />
                      </span>
                      <span>Genres</span>
                    </Typography>
                  </div>

                  {/* Director */}
                  <div className="director">
                    {/* Label */}
                    <Typography variant="body" className={fieldLabelClasses}>
                      Director
                    </Typography>
                  </div>

                  {/* Music */}
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
