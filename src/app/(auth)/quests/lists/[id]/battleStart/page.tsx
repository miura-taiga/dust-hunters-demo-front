// "use client";

// import { useState, useEffect } from "react";
// import { Button, Typography, Container } from "@mui/material";
// import Image from "next/image";

// const MonsterHunterBattle = () => {
//   const [countdown, setCountdown] = useState<number | null>(null);

//   // カウントダウンロジック
//   useEffect(() => {
//     if (countdown === null) return;

//     if (countdown > 0) {
//       const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [countdown]);

//   // 分と秒のフォーマット
//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${
//       remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
//     }`;
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between items-center">
//       {/* モンスター画像（仮画像を使用） */}
//       <div className="mt-10">
//         <Typography variant="h4" className="text-center mb-4">
//           モンスターが現れた！
//         </Typography>
//         <Image
//           src="https://i.gyazo.com/ddeb8bd0a6402cf3a9d1b6b139a020cc.png" // モンスター画像のパス
//           alt="Monster"
//           width={300}
//           height={300}
//         />
//       </div>

//       {/* 戦闘開始ボタン */}
//       <div className="mb-10">
//         {countdown === null ? (
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             onClick={() => setCountdown(300)} // 5分 = 300秒
//             className="px-8 py-3 bg-red-500 hover:bg-red-600"
//           >
//             戦闘開始
//           </Button>
//         ) : (
//           <Typography variant="h3" className="text-center">
//             {formatTime(countdown)}
//           </Typography>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MonsterHunterBattle;

"use client";

import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";

const MonsterHunterBattle = () => {
  const [countdown, setCountdown] = useState<number>(300); // 初期値を5分に設定
  const [isStarted, setIsStarted] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // カウントダウンロジック
  useEffect(() => {
    if (!isStarted) return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsTimeUp(true);
      playAlarmSound(); // 音を再生
    }
  }, [countdown, isStarted]);

  // 分と秒のフォーマット
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  // 音を再生する関数
  const playAlarmSound = () => {
    const audio = new Audio("/alarm-sound.mp3"); // 音ファイルのパス
    audio.play();
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://i.gyazo.com/4ddd52cddbc8963f2038a0d397667a25.png')" }}>
      {!isStarted ? (
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => setIsStarted(true)}
          className="bg-red-500 hover:bg-red-600 px-10 py-5 text-2xl"
        >
          討伐開始
        </Button>
      ) : (
        !isTimeUp ? (
          <Typography variant="h1" className="text-white">
            {formatTime(countdown)}
          </Typography>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => window.location.href = `/quests/lists/1/battleEnd`}
            className="bg-blue-500 hover:bg-blue-600 px-10 py-5 text-2xl"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            攻撃する
          </Button>
        )
      )}
    </div>
  );
};

export default MonsterHunterBattle;
