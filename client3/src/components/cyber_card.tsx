import Image from "next/image";

export default function CyberCard({
  id,
  author,
  review,
  funcRemove,
}: {
  id: string;
  author: string;
  review: string;
  funcRemove: Function;
}) {
  return (
    <div
      className="bg-black mb-5 ml-5 border border-gray px-6 py-4"
      style={{ height: 200, flexBasis: "46.54%", maxWidth: 400 }}
    >
      <div className="flex justify-between mb-4">
        <Image src="/rec.svg" alt="rec" width={54} height={4}></Image>
        <span className="text-2xl">{author}</span>
        <span onClick={() => funcRemove(id)}>remove</span>
      </div>
      <div className="text-sm">{review}</div>
    </div>
  );
}
