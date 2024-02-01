import GenreCard from "@/components/cards/GenreCard";
import MediaCard from "@/components/cards/MediaCard";
import CarouselOutsideTopControls from "@/components/carousels/CarouselOutsideTopControls";
import { useMustWatchMediaItems } from "@/hooks/media/useMustWatchMediaItems";
import { useNewMediaItems } from "@/hooks/media/useNewMediaItems";
import { useTrendingMediaItem } from "@/hooks/media/useTrendingMediaItem";
import { useGenres } from "@/hooks/useGenres";
import { cn } from "@/lib/utils";
import ctl from "@netlify/classnames-template-literals";

const carouselItemsParentClasses = ctl(
  `backface-hidden 
  ml-[-20px] 
  flex 
  touch-pan-y
  2xl:ml-[-30px]`,
);

const carouselItemClasses = ctl(
  `relative 
  w-[200px] 
  min-w-0 
  flex-shrink-0 
  flex-grow-0 
  pl-5 
  lg:w-1/5
  2xl:pl-[30px]`,
);

const ShowsList = () => {
  const { isLoading: isLoadingGenres, genres } = useGenres();

  const topGenres = genres?.filter((data) => data.top === true);

  const {
    isLoading: isLoadingTrendingShows,
    trendingMediaItems: trendingShows,
  } = useTrendingMediaItem("Show");

  const { isLoading: isLoadingNewShows, new_media_items: new_shows } =
    useNewMediaItems("Show");

  const {
    isLoading: isLoadingMustWatchShows,
    must_watch_media_items: must_watch_shows,
  } = useMustWatchMediaItems("Show");

  return (
    <div className="flex flex-col gap-y-12 md:gap-y-20 2xl:gap-y-24">
      <div className="genres space-y-12 2xl:space-y-24">
        {/* Genres */}
        <CarouselOutsideTopControls
          headingTitle="Our Genres"
          isLoading={isLoadingGenres}
        >
          <div className={carouselItemsParentClasses}>
            {genres?.map((genre) => {
              // Genre item
              return (
                <div className={carouselItemClasses} key={genre.id}>
                  <GenreCard title={genre.title} image={genre.image} />
                </div>
              );
            })}
          </div>
        </CarouselOutsideTopControls>

        {/* Popular 10 genres */}
        <CarouselOutsideTopControls
          headingTitle="Popular Top 10 In Genres"
          isLoading={isLoadingGenres}
        >
          <div className={carouselItemsParentClasses}>
            {topGenres?.map((genre) => {
              // Genre item
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px]  lg:w-1/4`)}
                  key={genre.id}
                >
                  <GenreCard
                    title={genre.title}
                    image={genre.image}
                    topBadge={genre.top}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideTopControls>

        {/* Trending shows */}
        <CarouselOutsideTopControls
          headingTitle="Trending Shows Now"
          isLoading={isLoadingTrendingShows}
        >
          <div className={carouselItemsParentClasses}>
            {trendingShows?.map((movie) => {
              // Show item
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={movie.id}
                >
                  <MediaCard
                    to={`show/${movie.id}`}
                    variant="season"
                    image={movie.image}
                    duration={movie.duration}
                    season={movie.season}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideTopControls>

        {/* New released shows */}
        <CarouselOutsideTopControls
          headingTitle="New Released Shows"
          isLoading={isLoadingNewShows}
        >
          <div className={carouselItemsParentClasses}>
            {new_shows?.map((movie) => {
              // Show item
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={movie.id}
                >
                  <MediaCard
                    to={`show/${movie.id}`}
                    variant="season"
                    image={movie.image}
                    duration={movie.duration}
                    season={movie.season}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideTopControls>

        {/* Must watch shows */}
        <CarouselOutsideTopControls
          headingTitle="Must - Watch Shows"
          isLoading={isLoadingMustWatchShows}
        >
          <div className={carouselItemsParentClasses}>
            {must_watch_shows?.map((movie) => {
              // Show item
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={movie.id}
                >
                  <MediaCard
                    to={`show/${movie.id}`}
                    variant="rating"
                    image={movie.image}
                    duration={movie.duration}
                    votes={movie.votes}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideTopControls>
      </div>
    </div>
  );
};

export default ShowsList;
