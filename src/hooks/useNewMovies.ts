import { getNewMovies } from "@/services/apiMovies";
import { useQuery } from "react-query";

export function useNewMovies() {
  const {
    isLoading,
    data: new_movies,
    error,
  } = useQuery({
    queryKey: ["new_movies"],
    queryFn: getNewMovies,
  });

  return { isLoading, error, new_movies };
}
