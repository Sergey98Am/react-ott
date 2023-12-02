import { getGenres } from "@/services/apiGenres";
import { useQuery } from "react-query";

export function useGenres() {
  const {
    isLoading,
    data: genres,
    error,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  return { isLoading, error, genres };
}
