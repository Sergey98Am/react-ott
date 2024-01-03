import GenreCard from "@/components/cards/GenreCard";
import MediaCard from "@/components/cards/MediaCard";
import CarouselOutsideControls from "@/components/carousels/CarouselOutsideControls";
import { useGenres } from "@/hooks/useGenres";
import { useMustWatchMovies } from "@/hooks/useMustWatchMovies";
import { useNewMovies } from "@/hooks/useNewMovies";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";
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

const MoviesList = () => {
  const { isLoading: isLoadingGenres, genres } = useGenres();
  const topGenres = genres?.filter((data) => data.top === true);
  const { isLoading: isLoadingTrendingMovies, trending_movies } =
    useTrendingMovies();
  const { isLoading: isLoadingNewMovies, new_movies } = useNewMovies();
  const { isLoading: isLoadingMustWatchMovies, must_watch_movies } =
    useMustWatchMovies();

  return (
    <div className="flex flex-col gap-y-12 md:gap-y-20 2xl:gap-y-24">
      <div className="genres space-y-12 2xl:space-y-24">
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

        <CarouselOutsideControls
          headingTitle="Trending Now"
          isLoading={isLoadingTrendingMovies}
        >
          <div className={carouselItemsParentClasses}>
            {trending_movies?.map((movie) => {
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[200px] lg:w-1/5`)}
                  key={movie.id}
                >
                  <MediaCard
                    variant="views"
                    image={movie.image}
                    duration={movie.duration}
                    views={movie.views}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideControls>

        <CarouselOutsideControls
          headingTitle="New Releases"
          isLoading={isLoadingNewMovies}
        >
          <div className={carouselItemsParentClasses}>
            {new_movies?.map((movie) => {
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[200px] lg:w-1/5`)}
                  key={movie.id}
                >
                  <MediaCard
                    variant="releasedTime"
                    image={movie.image}
                    releasedTime={movie.created_at}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideControls>

        <CarouselOutsideControls
          headingTitle="Must - Watch Movies"
          isLoading={isLoadingMustWatchMovies}
        >
          <div className={carouselItemsParentClasses}>
            {must_watch_movies?.map((movie) => {
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={movie.id}
                >
                  <MediaCard
                    variant="rating"
                    image={movie.image}
                    duration={movie.duration}
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

export default MoviesList;
