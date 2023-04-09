import Image from "next/image";

export default function CyberCard({ author, review }: { author: string, review: string }) {
    return <div className="flex bg-black text-white mb-5 ml-5" style={{height: 200}}>
        <div className="max-w-sm border border-gray-500 px-6 py-4">
            <div className="flex justify-between mb-4">
                <Image src="/rec.svg" alt="rec" width={54} height={4}></Image>
                <span className="text-2xl">{author}</span>
            </div>
            <div className="text-sm">
                {review}
            </div>
        </div>
    </div>
}