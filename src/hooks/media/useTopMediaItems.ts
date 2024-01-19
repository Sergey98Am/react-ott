import { getTopMediaItems } from "@/services/apiMediaItems";
import { useQuery } from "react-query";

type MediaType = "Movie" | "Show";

export function useTopMediaItems(mediaType: MediaType) {
  const {
    isLoading,
    data: top_media_items,
    error,
  } = useQuery({
    queryKey: ["top_media_items", mediaType],
    queryFn: () => getTopMediaItems(mediaType),
  });

  return { isLoading, error, top_media_items };
}
