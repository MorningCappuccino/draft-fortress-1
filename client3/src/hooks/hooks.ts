import useSWR from "swr";

import { fetcher } from "@/utils/utils";

export function useReviews() {
  const { data, error, isLoading } = useSWR("/entity", fetcher);

  return {
    reviews: data,
    isLoading,
    isError: error,
  };
}
