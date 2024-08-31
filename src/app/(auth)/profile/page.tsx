"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleSubmit = () => {
    // 送信処理など
    alert(`名前: ${name}, 性別: ${gender}`);
  };

  return (
    <div className="relative min-h-screen bg-[url('https://i.gyazo.com/81571bc05fb6ef0e1c77fdba946b2c69.png')] bg-repeat bg-auto flex justify-center items-center">
      <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", p: 3 }}>
        <Card sx={{ backgroundColor: "#424242", color: "white" }}>
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              style={{ marginBottom: "24px" }}
            >
              プロフィール
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="名前"
                  variant="outlined"
                  value={name}
                  onChange={handleNameChange}
                  InputLabelProps={{ style: { color: "white" } }}
                  sx={{ input: { color: "white" }, borderColor: "white" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="性別"
                  variant="outlined"
                  value={gender}
                  onChange={handleGenderChange}
                  InputLabelProps={{ style: { color: "white" } }}
                  sx={{ input: { color: "white" }, borderColor: "white" }}
                >
                  <MenuItem value="男性">男性</MenuItem>
                  <MenuItem value="女性">女性</MenuItem>
                  <MenuItem value="その他">その他</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={handleSubmit}
                >
                  保存
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
