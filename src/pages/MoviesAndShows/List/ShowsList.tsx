import GenreCard from "@/components/cards/GenreCard";
import MediaCard from "@/components/cards/MediaCard";
import CarouselOutsideTopControls from "@/components/carousels/CarouselOutsideTopControls";
import { useMustWatchMediaItems } from "@/hooks/media/useMustWatchMediaItems";
import { useNewMediaItems } from "@/hooks/media/useNewMediaItems";
import { useTrendingMediaItem } from "@/hooks/media/useTrendingMediaItem";
import { useGenres } from "@/hooks/useGenres";
import { cn } from "@/lib/utils";
import ctl from "@netlify/classnames-template-literals";
import { supabase } from "@/services/supabaseClient";

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
    <div className="space-y-12 md:space-y-20 2xl:space-y-24">
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

              // Genre item
              return (
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

        {/* Trending shows */}
        <CarouselOutsideTopControls
          headingTitle="Trending Shows Now"
          isLoading={isLoadingTrendingShows}
        >
          <div className={carouselItemsParentClasses}>
            {trendingShows?.map((show) => {
              // Show image
              const { data: showImage } = supabase.storage
                .from("images")
                .getPublicUrl(show.image);

              // Show item
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={show.id}
                >
                  <MediaCard
                    to={`show/${show.id}`}
                    variant="season"
                    image={showImage.publicUrl}
                    duration={show.duration}
                    season={show.season}
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
            {new_shows?.map((show) => {
              // Show image
              const { data: showImage } = supabase.storage
                .from("images")
                .getPublicUrl(show.image);

              // Show item
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={show.id}
                >
                  <MediaCard
                    to={`show/${show.id}`}
                    variant="season"
                    image={showImage.publicUrl}
                    duration={show.duration}
                    season={show.season}
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
            {must_watch_shows?.map((show) => {
              // Show image
              const { data: showImage } = supabase.storage
                .from("images")
                .getPublicUrl(show.image);

              // Show item
              return (
                <div
                  className={cn(`${carouselItemClasses} w-[250px] lg:w-1/4`)}
                  key={show.id}
                >
                  <MediaCard
                    to={`show/${show.id}`}
                    variant="rating"
                    image={showImage.publicUrl}
                    duration={show.duration}
                    votes={show.votes}
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
