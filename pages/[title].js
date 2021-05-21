import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const { title, dark } = router.query;

  return (
    <div className={dark === "true" ? "dark" : undefined}>
      <div className="grid h-screen justify-center align-center dark:bg-black bg-nord-6">
        <div className="self-center text-center">
          <h1 className="text-8xl font-semibold self-center text-nord-10 dark:text-nord-8">
            {title}
          </h1>
          {title !== "Sam Robbins" && (
            <h2 className="text-3xl pt-10 dark:text-white ">Sam Robbins</h2>
          )}
        </div>
      </div>
    </div>
  );
}
