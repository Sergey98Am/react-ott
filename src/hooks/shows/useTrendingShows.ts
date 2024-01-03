import { getTrendingShows } from "@/services/apiShows";
import { useQuery } from "react-query";

export function useTrendingShows() {
  const {
    isLoading,
    data: trending_shows,
    error,
  } = useQuery({
    queryKey: ["trending_shows"],
    queryFn: getTrendingShows,
  });

  return { isLoading, error, trending_shows };
}
