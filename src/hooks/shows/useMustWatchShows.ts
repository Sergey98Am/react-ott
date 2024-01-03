import { getMustWatchShows } from "@/services/apiShows";
import { useQuery } from "react-query";

export function useMustWatchShows() {
  const {
    isLoading,
    data: must_watch_shows,
    error,
  } = useQuery({
    queryKey: ["must_watch_shows"],
    queryFn: getMustWatchShows,
  });

  return { isLoading, error, must_watch_shows };
}
