import { getMustWatchMovies } from "@/services/apiMovies";
import { useQuery } from "react-query";

export function useMustWatchMovies() {
  const {
    isLoading,
    data: must_watch_movies,
    error,
  } = useQuery({
    queryKey: ["must_watch_movies"],
    queryFn: getMustWatchMovies,
  });

  return { isLoading, error, must_watch_movies };
}
