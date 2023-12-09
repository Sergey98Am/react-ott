import GenreCard from "@/components/cards/GenreCard";
import { useGenres } from "@/hooks/useGenres";
import MultiItemsSlider, { Slide } from "@/components/sliders/MultiItemsSlider";

const GenresSlider = () => {
  const { isLoading, genres } = useGenres();

  return (
    <div className="genres">
      <MultiItemsSlider isLoading={isLoading}>
        {genres?.map((genre) => {
          return (
            <Slide className="w-[200px]" key={genre.id}>
              <GenreCard title={genre.title} image={genre.image} />
            </Slide>
          );
        })}
      </MultiItemsSlider>
    </div>
  );
};

export default GenresSlider;
