"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/navigation";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // useRouter フックを使う

  // ページ遷移を行うための関数
  const handleNavigation = (newValue: number) => {
    setValue(newValue);

    // newValue に基づいてページ遷移を実行
    switch (newValue) {
      case 0:
        router.push("/top"); // ホームページに遷移
        break;
      case 1:
        router.push("/quests/lists"); // クエストページに遷移
        break;
      case 2:
        router.push("/encyclopedias"); // 図鑑ページに遷移
        break;
      case 3:
        router.push("/profile"); // ユーザーページに遷移
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%", // 幅を画面いっぱいに
          position: "fixed", // 画面下部に固定
          bottom: 0, // 下に固定
          left: 0, // 左端から
          right: 0, // 右端まで広げる
          zIndex: 1000, // 他のコンテンツの上に表示
          bgcolor: "background.paper", // 背景色を設定
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => handleNavigation(newValue)} // ページ遷移を行う関数をコール
        >
          <BottomNavigationAction label="ホーム" icon={<HomeIcon />} />
          <BottomNavigationAction label="クエスト" icon={<AssignmentIcon />} />
          <BottomNavigationAction label="図鑑" icon={<BookIcon />} />
          <BottomNavigationAction label="ユーザー" icon={<PersonIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}
