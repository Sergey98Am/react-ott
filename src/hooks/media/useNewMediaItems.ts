import { getNewMediaItems } from "@/services/apiMediaItems";
import { useQuery } from "react-query";

type MediaType = "Movie" | "Show";

export function useNewMediaItems(mediaType: MediaType) {
  const {
    isLoading,
    data: new_media_items,
    error,
  } = useQuery({
    queryKey: ["new_media_items", mediaType],
    queryFn: () => getNewMediaItems(mediaType),
  });

  return { isLoading, error, new_media_items };
}
