import { useState } from "react";
export default function Home() {
  const [title, setTitle] = useState("Set a title");
  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-semibold pt-6">
          Next.js open graph image as a service
        </h1>
      </div>
      <div className="aspect border mx-auto mt-12 grid">
        <div className="place-self-center justify-self-center text-center font-semibold text-6xl">
          {title}
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <label>
          <span className="pr-2 text-lg">Title:</span>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
      </div>
    </>
  );
}
