import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function CreateAccountGatheringAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Grant account to teller", username);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cấp tài khoản
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        sx={{
          marginTop: 2,
          backgroundColor: "#f8f9fa",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <TextField
          fullWidth
          required
          margin="normal"
          label="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          label="Họ & Tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          label="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          label="Năm sinh"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Tạo tài khoản
        </Button>
      </Box>
    </Container>
  );
}
