import { useState } from "react";
import Head from "next/head";
import { Switch } from "@headlessui/react";

export default function Home() {
  const [title, setTitle] = useState("Set a title");
  const [switchValue, setSwitchValue] = useState(false);
  const [image, setImage] = useState("Set a Title");
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
      <div className="flex justify-center py-4">
        {title !== "" ? (
          <img
            src={`https://og.samrobbins.uk/api/${image}${
              switchValue ? "?dark=true" : ""
            }`}
            className="border border-black"
          />
        ) : (
          <p className="text-center text-2xl">Start typing to see the image</p>
        )}
      </div>

      <div className="flex justify-center pt-4 px-2 gap-4">
        <label>
          <span className="pr-2 text-lg">Title:</span>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <Switch.Group as="div" className="flex items-center space-x-4">
          <Switch.Label>Dark mode</Switch.Label>
          <Switch
            as="button"
            checked={switchValue}
            onChange={setSwitchValue}
            className={`${
              switchValue ? "bg-indigo-600" : "bg-gray-200"
            } relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
          >
            {({ checked }) => (
              <span
                className={`${
                  checked ? "translate-x-5" : "translate-x-0"
                } inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full`}
              />
            )}
          </Switch>
        </Switch.Group>
        <button
          onClick={() => setImage(title)}
          className="px-4 py-2 border hover:bg-gray-200"
        >
          Update the image
        </button>
      </div>
      <div className="flex justify-center px-2">
        <span className="text-lg">
          You can access this image at:{" "}
          <a
            className="text-blue-600 hover:underline"
            href={`https://og.samrobbins.uk/api/${title}${
              switchValue ? "?dark=true" : ""
            }`}
          >{`https://og.samrobbins.uk/api/${title}${
            switchValue ? "?dark=true" : ""
          }`}</a>
        </span>
      </div>
    </>
  );
}
