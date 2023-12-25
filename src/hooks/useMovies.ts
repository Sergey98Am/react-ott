import { getMovies } from "@/services/apiMovies";
import { useQuery } from "react-query";

export function useMovies() {
  const {
    isLoading,
    data: movies,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  return { isLoading, error, movies };
}
