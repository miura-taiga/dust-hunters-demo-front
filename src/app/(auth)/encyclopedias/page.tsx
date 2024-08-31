import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

export default function MonsterEncyclopedia() {
  const defaultImage = 'https://i.gyazo.com/cf421d1c27a8b4e5b3ec69d5739d3bfa.png'; // 共通の画像パスを定義
  const monsters = [
    { id: 1, name: 'ドスジャグラス', kills: 0 },
    { id: 2, name: 'クルルヤック', kills: 0 },
    { id: 3, name: 'アンジャナフ', kills: 0 },
    { id: 4, name: 'リオレウス', kills: 0 },
    { id: 5, name: 'ディアブロス', kills: 0 },
    { id: 6, name: 'ティガレックス', kills: 0 },
    { id: 7, name: 'ベリオロス', kills: 0 },
    { id: 8, name: 'ナルガクルガ', kills: 0 },
  ];

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url(https://i.gyazo.com/81571bc05fb6ef0e1c77fdba946b2c69.png)', // 繰り返し表示する背景画像
        backgroundRepeat: 'repeat', // 背景を繰り返す
        backgroundSize: 'auto', // 画像をそのままのサイズで使用
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          padding: '16px',
          color: 'white',
        }}
      >
        <Typography variant="h3" align="center" gutterBottom style={{ marginBottom: '50x', paddingTop: '50px' }}>
          モンスター図鑑
        </Typography>

        <Grid container spacing={2}>
          {monsters.map((monster) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={monster.id}>
              <Card sx={{ backgroundColor: '#424242', color: 'white', height: '100%', maxWidth: '300px', margin: '0 auto' }}>
                <CardMedia
                  component="img"
                  height="100"
                  image={defaultImage}
                  alt={monster.name}
                />
                <CardContent sx={{ padding: '8px' }}>
                  <Typography variant="h6" component="div" align="center">
                    {monster.name}
                  </Typography>
                  <Typography variant="body2" color="white" align="center">
                    討伐数: {monster.kills}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
