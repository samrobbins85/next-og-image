import { useState } from "react";
import Head from "next/head";
export default function Home() {
  const [title, setTitle] = useState("Set a title");
  return (
    <>
      <Head>
        <title>Next.js open graph image</title>
      </Head>
      <div>
        <h1 className="text-center text-4xl font-semibold pt-6">
          Next.js open graph image as a service
        </h1>
      </div>
      <div className="aspect border mx-auto mt-12 grid">
        <div className="place-self-center justify-self-center text-center font-semibold vw">
          {title}
        </div>
      </div>
      <div className="flex justify-center pt-4 px-2">
        <label>
          <span className="pr-2 text-lg">Title:</span>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
      </div>
      <div className="flex justify-center px-2">
        <span className="text-lg">
          You can access this image at:{" "}
          <a
            className="text-blue-600 hover:underline"
            href={`https://og.samrobbins.uk/api/${title}`}
          >{`https://og.samrobbins.uk/api/${title}`}</a>
        </span>
      </div>
    </>
  );
}
