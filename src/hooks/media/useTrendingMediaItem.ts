import { getTrendingMediaItems } from "@/services/apiMediaItems";
import { useQuery } from "react-query";

type MediaType = "Movie" | "Show";

export function useTrendingMediaItem(mediaType: MediaType) {
  const {
    isLoading,
    data: trendingMediaItems,
    error,
  } = useQuery({
    queryKey: ["trending_media_items", mediaType],
    queryFn: () => getTrendingMediaItems(mediaType),
  });

  return { isLoading, error, trendingMediaItems };
}
