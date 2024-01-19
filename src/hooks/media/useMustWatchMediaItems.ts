import { getMustWatchMediaItems } from "@/services/apiMediaItems";
import { useQuery } from "react-query";

type MediaType = "Movie" | "Show";

export function useMustWatchMediaItems(mediaType: MediaType) {
  const {
    isLoading,
    data: must_watch_media_items,
    error,
  } = useQuery({
    queryKey: ["must_watch_media_items", mediaType],
    queryFn: () => getMustWatchMediaItems(mediaType),
  });

  return { isLoading, error, must_watch_media_items };
}
