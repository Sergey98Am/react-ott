import GenreCard from "@/components/cards/GenreCard";
import MultiItemsSlider, { Slide } from "@/components/sliders/MultiItemsSlider";
import { useGenres } from "@/hooks/useGenres";

const MoviesList = () => {
  const { isLoading: isLoadingGenres, genres } = useGenres();

  return (
    <div className="flex flex-col gap-y-12 md:gap-y-20 2xl:gap-y-24">
      <div className="genres space-y-12 2xl:space-y-24">
        <MultiItemsSlider headingTitle="Our Genres" isLoading={isLoadingGenres}>
          {genres?.map((genre) => {
            return (
              <Slide className="w-[200px]" key={`genre-${genre.id}`}>
                <GenreCard title={genre.title} image={genre.image} />
              </Slide>
            );
          })}
        </MultiItemsSlider>
      </div>
    </div>
  );
};

export default MoviesList;
