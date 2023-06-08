import CyberCard from "@/components/cyber_card";
import styles from "@/styles/cyberpunk.module.scss";
import CyberAddReview from "@/components/cyber_add-review";
import { useReviews } from "@/hooks/hooks";
import { Review } from "@/types";
import useSWRMutation from "swr/mutation";
import { useState } from "react";

const author = "Jonh Doe";
const review = `Say hello to the Edgerunners Update. In celebration of Cyberpunk:
Edgerunners — the pulsa ting anime set in the world of Cyberpunk
2077 — this brand new free update brings in-game goodies inspired by
the anime, as well as a host of new features and content to dig
into.`;

async function sendRequest(url: string, id: string) {
  return fetch(url + `/${id}`, {
    method: "DELETE",
  });
}

export default function Home() {
  const { reviews, isLoading, isError } = useReviews();
  const [id, setId] = useState<string>("");

  const { trigger } = useSWRMutation(
    ["http://localhost:3000/entity", id],
    ([url, id]) => sendRequest(url, id)
  );

  const RemoveReview = (id: string): void => {
    //return Review
    // const upd =
    console.log(id);
    setId(id);
    // trigger();
    // reviews?.filter((item: Review) => item._id !== id);
    // useReviews(upd)
  };

  return (
    <main>
      {/* Cyberpunk 2077 */}
      <div id="cyberpunk-2077">
        <div className={styles.cyber__wrap + " mx-auto pt-14"}>
          <h2 className={styles.cyber__hreview + " pb-8 text-yellow"}>
            Review
          </h2>
          <div className="mx-auto" style={{ maxWidth: 867 }}>
            {isError && <div>failed to load reviews</div>}
            {isLoading && <div>loading...</div>}

            {reviews && (
              <div
                className={
                  styles.cyber__reviews + " flex flex-wrap overflow-y-scroll"
                }
                style={{ height: 550 }}
              >
                {/* <CyberCard author={author} review={review} />
                <CyberCard author={author} review={review} /> */}

                {[...reviews].reverse().map((review: Review) => (
                  <CyberCard
                    key={review._id}
                    id={review._id}
                    author={review.title}
                    review={review.description}
                    funcRemove={RemoveReview}
                  />
                ))}
              </div>
            )}
            <CyberAddReview />
          </div>
        </div>
      </div>
      {/* Cyberpunk 2077 */}
    </main>
  );
}
