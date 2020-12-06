import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const { title, dark } = router.query;

  return (
    <div className={dark === "true" ? "dark" : undefined}>
      <div className="flex h-screen justify-center align-center dark:bg-black">
        <h1 className="text-center text-6xl font-semibold self-center dark:text-white">
          {title}
        </h1>
      </div>
    </div>
  );
}
