"use client";

import { Button, Typography } from "@mui/material";

const BattleEndScreen = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-between p-4"
      style={{
        backgroundImage: "url('https://i.gyazo.com/4ddd52cddbc8963f2038a0d397667a25.png')",
      }}
    >
      {/* 画面上部に「討伐完了！」を配置 */}
      <Typography variant="h2" className="text-white mt-8">
        討伐完了！
      </Typography>

      {/* ボタンをPCでは横並び、スマホでは縦並びに配置 */}
      <div className="w-full max-w-2xl flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-auto mb-48">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 text-lg"
          onClick={() => window.location.href = 'https://twitter.com/share'}
        >
          Xに共有する
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="medium"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 text-lg"
          onClick={() => window.location.href = '/quests/lists'}
        >
          クエスト一覧
        </Button>
      </div>
    </div>
  );
};

export default BattleEndScreen;
