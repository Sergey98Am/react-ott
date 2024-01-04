import GenreCard from "@/components/cards/GenreCard";
import MediaCard from "@/components/cards/MediaCard";
import CarouselOutsideControls from "@/components/carousels/CarouselOutsideControls";
import { useMustWatchShows } from "@/hooks/shows/useMustWatchShows";
import { useNewShows } from "@/hooks/shows/useNewShows";
import { useTrendingShows } from "@/hooks/shows/useTrendingShows";
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
  const { isLoading: isLoadingTrendingShows, trending_shows } =
    useTrendingShows();
  const { isLoading: isLoadingNewShows, new_shows } = useNewShows();
  const { isLoading: isLoadingMustWatchShows, must_watch_shows } =
    useMustWatchShows();

  return (
    <div className="flex flex-col gap-y-12 md:gap-y-20 2xl:gap-y-24">
      <div className="genres space-y-12 2xl:space-y-24">
        {/* Genres */}
        <CarouselOutsideControls
          headingTitle="Our Genres"
          isLoading={isLoadingGenres}
        >
          <div className={carouselItemsParentClasses}>
            {genres?.map((genre) => {
              return (
                <div className={carouselItemClasses} key={genre.id}>
                  <GenreCard title={genre.title} image={genre.image} />
                </div>
              );
            })}
          </div>
        </CarouselOutsideControls>

        {/* Popular 10 genres */}
        <CarouselOutsideControls
          headingTitle="Popular Top 10 In Genres"
          isLoading={isLoadingGenres}
        >
          <div className={carouselItemsParentClasses}>
            {topGenres?.map((genre) => {
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
        </CarouselOutsideControls>

        {/* Trending shows */}
        <CarouselOutsideControls
          headingTitle="Trending Shows Now"
          isLoading={isLoadingTrendingShows}
        >
          <div className={carouselItemsParentClasses}>
            {trending_shows?.map((movie) => {
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={movie.id}
                >
                  <MediaCard
                    variant="season"
                    image={movie.image}
                    duration={movie.duration}
                    season={movie.season}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideControls>

        {/* New released shows */}
        <CarouselOutsideControls
          headingTitle="New Released Shows"
          isLoading={isLoadingNewShows}
        >
          <div className={carouselItemsParentClasses}>
            {new_shows?.map((movie) => {
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={movie.id}
                >
                  <MediaCard
                    variant="season"
                    image={movie.image}
                    duration={movie.duration}
                    season={movie.season}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideControls>

        {/* Must watch shows */}
        <CarouselOutsideControls
          headingTitle="Must - Watch Shows"
          isLoading={isLoadingMustWatchShows}
        >
          <div className={carouselItemsParentClasses}>
            {must_watch_shows?.map((movie) => {
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={movie.id}
                >
                  <MediaCard
                    variant="rating"
                    image={movie.image}
                    duration={movie.duration}
                    votes={movie.votes}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideControls>
      </div>
    </div>
  );
};

export default ShowsList;
