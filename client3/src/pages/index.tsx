import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* Cyberpunk 2077 */}
      <div id="cyberpunk-2077">
        <div className="flex bg-black text-white">
          <div className="max-w-sm border p-4">
            <div className="flex justify-between mb-4">
              <Image src="/rec.svg" alt="rec" width={54} height={4}></Image>
              <span>Jonh Doe</span>
            </div>
            <div>
              Say hello to the Edgerunners Update. In celebration of Cyberpunk:
              Edgerunners — the pulsa ting anime set in the world of Cyberpunk
              2077 — this brand new free update brings in-game goodies inspired by
              the anime, as well as a host of new features and content to dig
              into.
            </div>
          </div>
        </div>
      </div>
      {/* Cyberpunk 2077 */}
    </main>
  );
}
