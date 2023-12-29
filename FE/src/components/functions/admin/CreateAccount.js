import React, { useState, useEffect } from "react";
import "../../../style/admin/CreateAccount.css";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Thêm state cho email
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState(""); // Thêm state cho address
  const [role, setRole] = useState("");
  const [id_workplace, setIDWorkplace] = useState(""); // Thêm state cho id_workplace

  let callAPI = async (api) => {
    return axios.get(api).then((response) => {
      renderData(response.data, "id_workplace");
    });
  };
  useEffect(() => {
    callAPI("https://provinces.open-api.vn/api/?depth=1");
  }, []);

  let renderData = (array, select) => {
    let row = ' <option disable value="">Chọn</option>';
    array.forEach((element) => {
      row += `<option data-id="${element.code}" value="${element.name}">${element.name}</option>`;
    });
    // document.querySelector("#" + select).innerHTML = row;
    const selectElement = document.querySelector("." + select);
    if (selectElement) {
      selectElement.innerHTML = row;
    } else {
      console.error("Element with id '" + select + "' not found.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are not empty
    if (
      !username ||
      !password ||
      !role ||
      !id_workplace ||
      role === "" ||
      id_workplace === ""
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

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
          role,
          id_workplace,
        }),
      });

      if (response.ok) {
        console.log(response);
        alert("Tạo thành công");
        // Thêm logic xử lý khi đăng ký thành công
      } else {
        console.error("Failed to grant account to teller");
        alert("Tạo thất bại");
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
        <div className="form-group has-feedback">
          <label htmlFor="role">Chức vụ:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value="">-Chọn-</option>
            <option value="transactionAdmin">Trưởng điểm giao dịch</option>
            <option value="gatheringAdmin">Trưởng điểm tập kết</option>
          </select>
        </div>

        <div className="has-feedback">
          <div className="name">
            <label className="control-label">TỈNH/THÀNH PHỐ</label>
          </div>
          <div className="input-group">
            <select
              id="id_workplace"
              name="id_workplace"
              className="form-control has-feedback-left id_workplace"
              onChange={(event) => {
                setIDWorkplace(event.target.value);
              }}
            >
              <option value="">Chọn Tỉnh/Thành phố</option>
            </select>
          </div>
        </div>
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
