import CyberCard from "@/components/cyber_card";
import { Inter } from "next/font/google";

import styles from "@/styles/cyberpunk.module.scss";

const inter = Inter({ subsets: ["latin"] });

const author = "Jonh Doe";
const review = `Say hello to the Edgerunners Update. In celebration of Cyberpunk:
Edgerunners — the pulsa ting anime set in the world of Cyberpunk
2077 — this brand new free update brings in-game goodies inspired by
the anime, as well as a host of new features and content to dig
into.`;

export default function Home() {
  return (
    <main>
      {/* Cyberpunk 2077 */}
      <div id="cyberpunk-2077">
        <div className={styles.cyber__wrap + " mx-auto pt-14"}>
          <h2 className={styles.cyber__hreview + " pb-8"}>REVIEW</h2>
          <div className={styles.cyber__reviews + " flex flex-wrap overflow-y-scroll mx-auto"} style={{height: 550}}>
            <CyberCard author={author} review={review} />
            <CyberCard author={author} review={review} />
            <CyberCard author={author} review={review} />
            <CyberCard author={author} review={review} />
            <CyberCard author={author} review={review} />
          </div>
        </div>
      </div>
      {/* Cyberpunk 2077 */}
    </main>
  );
}
