import { useParams } from "react-router-dom";
import Container from "@/components/ui/Container";
import { useSingleMovie } from "@/hooks/movies/useSingleMovie";
import Spinner from "@/components/icons/Spinner";
import MediaOverlayCard from "@/components/cards/MediaOverlayCard";

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
          <div>
            <MediaOverlayCard
              image={single_movie.banner}
              title={single_movie.title}
              description={single_movie.description}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default MovieDetail;
