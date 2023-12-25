import MediaOverlayCard from "@/components/cards/MediaOverlayCard";
import OneItemSlider, { Slide } from "@/components/sliders/OneItemSlider";
import Container from "@/components/ui/Container";
import { useMovies } from "@/hooks/useMovies";

const Movies = () => {
  const { isLoading, movies } = useMovies();

  return (
    <div className="pb-20 pt-36 md:pb-28 2xl:pt-40">
      <Container className="space-y-[150px]">
        <OneItemSlider isLoading={isLoading}>
          {movies?.map((movie) => {
            return (
              <Slide key={movie.id}>
                <MediaOverlayCard
                  className="md:!pb-[88px]"
                  title={movie.title}
                  description={movie.description}
                  image={movie.image}
                />
              </Slide>
            );
          })}
        </OneItemSlider>
      </Container>
    </div>
  );
};

export default Movies;
