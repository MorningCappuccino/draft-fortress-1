import useSWR from "swr";
// import useSWRMutation from 'swr/mutation';

import { fetcher, axFetcher } from "@/utils/utils";
import { Review } from "@/types";

export function useReviews() {
  const { data, error, isLoading } = useSWR<Review[], Error>(
    "http://localhost:3000/entity",
    fetcher
  );

  // useSWR()

  return {
    reviews: data,
    isLoading,
    isError: error,
  };
}

// export function useRemoveReviews(id: string) {
//   const { data, error, isLoading } = useSWR<Review[], Error>(
//     ["http://localhost:3000/entity", id],
//     fetcher
//   );

//   // useSWR()

//   return {
//     reviews: data,
//     isLoading,
//     isError: error,
//   };
// }

// export function useSaveReview(review: Omit<Review, "_id">) {
//   const { data, error, isLoading } = useSWRMutation<Review, Error>("/entity", fetcherPost);

//   return {
//     reviews: data,
//     isLoading,
//     isError: error,
//   };
// }
