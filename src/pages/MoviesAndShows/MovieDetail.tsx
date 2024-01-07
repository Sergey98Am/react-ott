import { useParams } from "react-router-dom";
import Container from "@/components/ui/Container";
import { useSingleMovie } from "@/hooks/movies/useSingleMovie";
import Spinner from "@/components/icons/Spinner";
import MediaOverlayCard from "@/components/cards/MediaOverlayCard";
import FreeTrial from "@/components/FreeTrial";
import ctl from "@netlify/classnames-template-literals";

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
                  className={`${infoSectionClasses} description hidden xl:block`}
                >
                  Description
                </div>
                <div className={`${infoSectionClasses} cast`}>Cast</div>
                <div className={`${infoSectionClasses} reviews`}>Reviews</div>
              </div>
              <div className="order-first col-span-12 flex flex-col gap-y-5 xl:order-last xl:col-span-4">
                <div
                  className={`${infoSectionClasses} description block xl:hidden`}
                >
                  Description
                </div>
                <div
                  className={`${infoSectionClasses} flex flex-col gap-y-5 sm:gap-y-6`}
                >
                  <div className="released-year">Relased Year</div>
                  <div className="available-languages">Available Languages</div>
                  <div className="ratings">Ratings</div>
                  <div className="genres">Genres</div>
                  <div className="director">Director</div>
                  <div className="music">Music</div>
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
