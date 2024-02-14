import GenreCard from "@/components/cards/GenreCard";
import MediaCard from "@/components/cards/MediaCard";
import CarouselOutsideTopControls from "@/components/carousels/CarouselOutsideTopControls";
import { useGenres } from "@/hooks/useGenres";
import { useMustWatchMediaItems } from "@/hooks/media/useMustWatchMediaItems";
import { useNewMediaItems } from "@/hooks/media/useNewMediaItems";
import { useTrendingMediaItem } from "@/hooks/media/useTrendingMediaItem";
import { cn } from "@/lib/utils";
import ctl from "@netlify/classnames-template-literals";
import { supabase } from "@/services/supabaseClient";

// When there is a class reusing, used ctl()

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

  const {
    isLoading: isLoadingTrendingMovies,
    trendingMediaItems: trendingMovies,
  } = useTrendingMediaItem("Movie");

  const { isLoading: isLoadingNewMovies, new_media_items: newMovies } =
    useNewMediaItems("Movie");

  const {
    isLoading: isLoadingMustWatchMovies,
    must_watch_media_items: mustWatchMovies,
  } = useMustWatchMediaItems("Movie");

  return (
    <div className="flex flex-col gap-y-12 md:gap-y-20 2xl:gap-y-24">
      {/* Carousels */}
      <div className="genres space-y-12 2xl:space-y-24">
        {/* Genres */}
        <CarouselOutsideTopControls
          headingTitle="Our Genres"
          isLoading={isLoadingGenres}
        >
          <div className={carouselItemsParentClasses}>
            {genres?.map((genre) => {
              // Genre image
              const { data: genreImage } = supabase.storage
                .from("images")
                .getPublicUrl(genre.image);

              // Genre item
              return (
                <div className={carouselItemClasses} key={genre.id}>
                  <GenreCard title={genre.title} image={genreImage.publicUrl} />
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
              // Genre image
              const { data: genreImage } = supabase.storage
                .from("images")
                .getPublicUrl(genre.image);

              return (
                // Genre item
                <div
                  className={cn(`${carouselItemClasses} w-[250px]  lg:w-1/4`)}
                  key={genre.id}
                >
                  <GenreCard
                    title={genre.title}
                    image={genreImage.publicUrl}
                    topBadge={genre.top}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideTopControls>

        {/* Trending movies */}
        <CarouselOutsideTopControls
          headingTitle="Trending Now"
          isLoading={isLoadingTrendingMovies}
        >
          <div className={carouselItemsParentClasses}>
            {trendingMovies?.map((movie) => {
              // Movie image
              const { data: movieImage } = supabase.storage
                .from("images")
                .getPublicUrl(movie.image);

              return (
                // Movie item
                <div
                  className={cn(`${carouselItemClasses} w-[200px] lg:w-1/5`)}
                  key={movie.id}
                >
                  <MediaCard
                    to={`movie/${movie.id}`}
                    variant="views"
                    image={movieImage.publicUrl}
                    duration={movie.duration}
                    views={movie.views}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideTopControls>

        {/* New released movies */}
        <CarouselOutsideTopControls
          headingTitle="New Releases"
          isLoading={isLoadingNewMovies}
        >
          <div className={carouselItemsParentClasses}>
            {newMovies?.map((movie) => {
              // Movie image
              const { data: movieImage } = supabase.storage
                .from("images")
                .getPublicUrl(movie.image);

              return (
                // Movie item
                <div
                  className={cn(`${carouselItemClasses} w-[200px] lg:w-1/5`)}
                  key={movie.id}
                >
                  <MediaCard
                    to={`movie/${movie.id}`}
                    variant="releasedTime"
                    image={movieImage.publicUrl}
                    releasedTime={movie.created_at}
                  />
                </div>
              );
            })}
          </div>
        </CarouselOutsideTopControls>

        {/* Must watch movies */}
        <CarouselOutsideTopControls
          headingTitle="Must - Watch Movies"
          isLoading={isLoadingMustWatchMovies}
        >
          <div className={carouselItemsParentClasses}>
            {mustWatchMovies?.map((movie) => {
              // Movie image
              const { data: movieImage } = supabase.storage
                .from("images")
                .getPublicUrl(movie.image);

              return (
                // Movie item
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={movie.id}
                >
                  <MediaCard
                    to={`movie/${movie.id}`}
                    variant="rating"
                    image={movieImage.publicUrl}
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

export default MoviesList;
