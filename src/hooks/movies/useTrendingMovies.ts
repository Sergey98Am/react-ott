import { getTrendingMovies } from "@/services/apiMovies";
import { useQuery } from "react-query";

export function useTrendingMovies() {
  const {
    isLoading,
    data: trending_movies,
    error,
  } = useQuery({
    queryKey: ["trending_movies"],
    queryFn: getTrendingMovies,
  });

  return { isLoading, error, trending_movies };
}
