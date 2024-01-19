import { getSingleMediaItem } from "@/services/apiMediaItems";
import { useQuery } from "react-query";

export function useSingleMediaItem(id: number) {
  const {
    isLoading,
    data: single_media_item,
    error,
  } = useQuery({
    queryKey: ["single_media_item", id],
    queryFn: () => getSingleMediaItem(id),
  });

  return { isLoading, error, single_media_item };
}
