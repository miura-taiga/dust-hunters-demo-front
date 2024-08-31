"use client";

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, IconButton, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import LoginIcon from '@mui/icons-material/Login';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // ログイン状態の管理
  const router = useRouter();

  // ログインボタンを押した時の処理
  const handleLogin = () => {
    setIsLoggedIn(true);
    router.push('/login');
  };

  // アバターをクリックした時の処理
  const handleProfileClick = () => {
    router.push('/profile'); // /profile ページに遷移
  };

  // "Dust Hunters" をクリックした時に /top に遷移
  const handleLogoClick = () => {
    router.push('/top'); // /top ページに遷移
  };

  return (
    <AppBar position="static" className="bg-blue-700">
      <Toolbar
        sx={{
          minHeight: { xs: '70px', md: '80px' }, // 小さい画面では70px、大きい画面では80px
          justifyContent: 'space-between', // コンテンツを左右に配置
          flexDirection: { xs: 'row' }, // スマホでは横並びにする
          paddingX: { xs: 2, md: 4 },
          alignItems: 'center', // アイテムを中央揃え
        }}
      >
        {/* ロゴ */}
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.5rem' }, // レスポンシブにフォントサイズを調整
            cursor: 'pointer',
            fontFamily: "'Cinzel', serif", // フォントをモンハン風にカスタマイズ
            color: 'white',
            textAlign: { xs: 'center', md: 'left' },
          }}
          onClick={handleLogoClick} // クリックイベントを追加
        >
          Dust Hunters
        </Typography>

        {/* 右側の状態表示 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: { xs: 0, md: 0 }, // 画面サイズに応じたマージン
          }}
        >
          {isLoggedIn ? (
            <Avatar
              alt="User Avatar"
              src="/avatar.png" // アバター画像のパス
              sx={{
                width: 60,
                height: 60,
                cursor: 'pointer',
                border: '2px solid white', // 白の境界線で目立たせる
              }}
              onClick={handleProfileClick} // クリック時に /profile ページへ遷移
            />
          ) : (
            <Button
              color="inherit"
              onClick={handleLogin}
              className="text-white"
              startIcon={<LoginIcon />} // ログインアイコンを追加
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' }, // レスポンシブフォントサイズ
                padding: '8px 16px',
                color: 'white',
                display: 'flex',
                alignItems: 'center', // ボタン内のアイテムを中央に
                gap: 1, // アイコンとテキストの間に余白
                justifyContent: 'center',
              }}
            >
              ログイン
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
