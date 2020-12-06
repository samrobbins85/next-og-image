import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div className="flex h-screen justify-center align-center">
      <h1 className="text-center text-6xl font-semibold self-center">
        {title}
      </h1>
    </div>
  );
}
