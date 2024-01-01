import GenreCard from "@/components/cards/GenreCard";
import { useGenres } from "@/hooks/useGenres";
import MultiItemsSlider, {
  Slide,
} from "@/components/carousels/MultiItemsSlider";

const GenresSlider = () => {
  const { isLoading, genres } = useGenres();

  return (
    <div className="genres">
      <MultiItemsSlider
        headingTitle="Explore our wide variety of categories"
        headingDescription="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        isLoading={isLoading}
      >
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
