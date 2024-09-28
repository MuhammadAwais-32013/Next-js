import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col items-center h-[80vh] justify-center  container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg text-gray-700">
        This is a place where I share my thoughts and experiences. Stay tuned
        for more articles!
      </p>
    </main>
  );
}
