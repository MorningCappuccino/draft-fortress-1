import CyberCard from "@/components/cyber_card";
import styles from "@/styles/cyberpunk.module.scss";
import CyberAddReview from "@/components/cyber_add-review";
import { useReviews } from "@/hooks/hooks";

const author = "Jonh Doe";
const review = `Say hello to the Edgerunners Update. In celebration of Cyberpunk:
Edgerunners — the pulsa ting anime set in the world of Cyberpunk
2077 — this brand new free update brings in-game goodies inspired by
the anime, as well as a host of new features and content to dig
into.`;

export default function Home() {
  const { reviews, isLoading, isError } = useReviews();

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
                <CyberCard author={author} review={review} />
                <CyberCard author={author} review={review} />
                {reviews.map((review) => (
                  <CyberCard
                    key={review._id}
                    author={review.title}
                    review={review.description}
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
