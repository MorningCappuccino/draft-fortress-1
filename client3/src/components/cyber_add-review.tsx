import { Review } from "@/types";
import { fetcher, fetcherPost } from "@/utils/utils";
import useSWRMutation from "swr/mutation";

async function sendRequest(url: string, { arg }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: new Headers({ "content-type": "application/json" }),
  });
}

export default function CyberAddReview() {
  // const { trigger } = useSWRMutation<Review, Error>("/entity", fetcherPost);
  // const { trigger } = useSWRMutation("/entity", fetcherPost);
  const { trigger } = useSWRMutation(
    "http://localhost:3000/entity",
    sendRequest
  );

  const AddReview = () => {
    trigger({ title: "test_3", description: "test_4" });
  };

  return (
    <div className="pt-20 pl-5 pb-10 flex justify-between text-lg">
      <textarea
        className="border border-aqua border-b-2 bg-black p-4 placeholder-aqua text-white text-lg outline-none"
        name=""
        id=""
        cols={44}
        rows={3}
        placeholder="Type our review..."
      ></textarea>
      <div className="flex flex-col justify-between items-end">
        <input
          className="bg-black border-aqua border-b-2 placeholder-aqua text-lg outline-none"
          style={{ width: 330, lineHeight: "40px" }}
          placeholder="Signature..."
          type="text"
        />
        <button
          className="text-aqua uppercase text-2xl bg-button bg-no-repeat"
          style={{ height: 62, width: 264 }}
          onClick={AddReview}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
