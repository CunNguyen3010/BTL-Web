import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

export default function CreateAccountGatheringAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Thêm state cho email
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState(""); // Thêm state cho address
  const [workplace, setWorkplace] = useState(""); // Thêm state cho workplace
  const [id_workplace, setIDWorkplace] = useState(""); 

  useEffect(() => {
    // Lấy giá trị từ cookie khi component được mount
    const userDataFromCookie = Cookies.get('userData');
    if (userDataFromCookie) {
      const userData = JSON.parse(userDataFromCookie);
      // console.log(userData)
      setWorkplace(userData.user.workplace || ""); // Sử dụng giá trị mặc định hoặc giá trị từ userData
      setIDWorkplace(userData.user.id_workplace || ""); // Sử dụng giá trị mặc định hoặc giá trị từ userData
    }
  }, []); // Chạy chỉ một lần khi component mount

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          name,
          email,
          phone,
          birth,
          address,
          role: "gatheringStaff", // Đặt giá trị mặc định cho role
          workplace,
          id_workplace
        }),
      });

      if (response.ok) {
        console.log(response);
        alert("Tạo thành công")
        // Thêm logic xử lý khi đăng ký thành công
      } else {
        console.error("Failed to grant account to teller");
        alert("Tạo thất bại")
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <TextField
          fullWidth
          required
          margin="normal"
          label="Địa chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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