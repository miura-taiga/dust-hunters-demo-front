import Link from 'next/link';

export default function TopPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white px-4">
      {/* 背景画像 */}
      <img
        src="https://i.gyazo.com/c8ebb252d275d3da66a6845723811b53.png"
        alt="Dust Hunters Background"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />

      {/* コンテンツ */}
      <div className="relative z-10 text-center flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest text-shadow-lg">
          Dust Hunters
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-shadow-md">
          アプリ紹介文
        </p>
        <p className="text-base sm:text-lg mt-6">さあ！狩へ！</p>
        <Link href="/quests/lists">
          <div className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-base sm:text-lg rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            Start a New Quest
          </div>
        </Link>
      </div>
    </div>
  );
}
