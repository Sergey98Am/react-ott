import { getNewShows } from "@/services/apiShows";
import { useQuery } from "react-query";

export function useNewShows() {
  const {
    isLoading,
    data: new_shows,
    error,
  } = useQuery({
    queryKey: ["new_shows"],
    queryFn: getNewShows,
  });

  return { isLoading, error, new_shows };
}
