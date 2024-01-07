import { getSingleMovie } from "@/services/apiMovies";
import { useQuery } from "react-query";

export function useSingleMovie(id: number) {
  const {
    isLoading,
    data: single_movie,
    error,
  } = useQuery({
    queryKey: ["single_movie", id],
    queryFn: () => getSingleMovie(id),
  });

  return { isLoading, error, single_movie };
}
