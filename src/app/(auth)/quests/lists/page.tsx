"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

interface Quest {
  id: number;
  title: string;
  description: string;
}

const quests: Quest[] = [
  { id: 1, title: "泥土の隠者", description: "オロミドロ1頭の狩猟" },
  { id: 2, title: "彷徨える雪鬼獣", description: "狩猟するクエストの詳細" },
  { id: 3, title: "轟く声", description: "狩猟するクエストの詳細" },
  { id: 4, title: "ねじれた欲望", description: "狩猟するクエストの詳細" },
  { id: 5, title: "大社跡での肝試し", description: "狩猟するクエストの詳細" },
  { id: 6, title: "電光雷轟、夢幻泡影", description: "狩猟するクエストの詳細" },
  { id: 7, title: "天空の王者、大地の暴君", description: "狩猟するクエストの詳細" },
];

const monsterImage = "https://i.gyazo.com/ddeb8bd0a6402cf3a9d1b6b139a020cc.png"; // モンスターの画像URL

export default function QuestPage() {
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const handleQuestClick = (quest: Quest) => {
    setSelectedQuest(quest);
    if (isMobile) {
      setOpen(true);
    }
  };
  const handleStartQuest = () => {
    if (selectedQuest) {
      router.push(`/quests/lists/${selectedQuest.id}/battleStart`);
    }
  };

  return (
    <div className="relative min-h-screen bg-[url('https://i.gyazo.com/81571bc05fb6ef0e1c77fdba946b2c69.png')] bg-repeat bg-auto flex flex-col justify-center items-center">
      <Box sx={{ width: "90%", maxWidth: 1200, paddingTop: 4 }}>
        <Grid container spacing={2}>
          {/* クエスト一覧 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: "#424242", color: "white" }}>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  クエスト一覧
                </Typography>
                <List>
                  {quests.map((quest) => (
                    <ListItem
                      component="button"
                      key={quest.id}
                      onClick={() => handleQuestClick(quest)}
                      sx={{
                        backgroundColor: selectedQuest?.id === quest.id ? "#616161" : "inherit",
                      }}
                    >
                      <ListItemText primary={quest.title} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* クエスト詳細 (PC画面時に表示) */}
          {!isMobile && selectedQuest && (
            <Grid item xs={12} md={8}>
              <Card sx={{ backgroundColor: "#424242", color: "white" }}>
                <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  <Typography variant="h6" gutterBottom>
                    {selectedQuest.title}
                  </Typography>
                  {/* モンスターの画像 */}
                  <img
                    src={monsterImage}
                    alt={selectedQuest.title}
                    style={{ maxWidth: "200px", marginBottom: "16px" }} // 画像のサイズを適切に設定
                  />
                  <Typography variant="body1" align="center">{selectedQuest.description}</Typography>
                  <Box mt={2} textAlign="center">
                    <Typography variant="body2">
                      詳細なクエスト内容やターゲット情報をここに表示できます。
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2 }} onClick={handleStartQuest}>
                      クエスト出発
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Box>

      {/* モバイル版モーダル */}
      {isMobile && (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
          <DialogTitle>
            {selectedQuest?.title}
            <IconButton
              aria-label="close"
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers sx={{ textAlign: "center" }}>
            {/* モンスターの画像（モバイル版） */}
            <img
              src={monsterImage}
              alt={selectedQuest?.title}
              style={{
                display: "block",
                margin: "0 auto", // 画像を中央に揃える
                maxWidth: "150px", 
                marginBottom: "16px",
              }}
            />
            <Typography gutterBottom>{selectedQuest?.description}</Typography>
            <Typography variant="body2">
              詳細なクエスト内容やターゲット情報をここに表示できます。
            </Typography>
          </DialogContent>
          <Box p={2} textAlign="center">
            <Button onClick={handleStartQuest} variant="contained">
              クエスト出発
            </Button>
          </Box>
        </Dialog>
      )}
    </div>
  );
}
