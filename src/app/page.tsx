import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen sm:py-10 font-[family-name:var(--font-geist-sans)] bg-black">
      <main className="flex flex-col row-start-2 text-white text-center items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl">All the best in DB QUIZ!!!</h1>
        <p>8 MCQs = 20pts</p>
        <p>2 Structured = 30pts</p>
        <p>Gambateh</p>
        <Image src="/ZW_Forehead.jpg" alt="" width={720} height={1280} />
      </main>
    </div>
  );
}
