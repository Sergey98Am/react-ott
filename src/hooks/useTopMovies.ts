import { getTopMovies } from "@/services/apiMovies";
import { useQuery } from "react-query";

export function useTopMovies() {
  const {
    isLoading,
    data: top_movies,
    error,
  } = useQuery({
    queryKey: ["top_movies"],
    queryFn: getTopMovies,
  });

  return { isLoading, error, top_movies };
}
