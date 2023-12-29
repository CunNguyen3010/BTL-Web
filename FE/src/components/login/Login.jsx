import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { MdOutlineLocalShipping } from "react-icons/md";
import LoginImage from "../../assets/images/login_image.jpg";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login_icon from "../../assets/images/login_icon.png";
// import Logo from "../../assets/images/logo1.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Cookies from "js-cookie";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Magic Post
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/login", { username, password })
      .then((result) => {
        // console.log(result);
        if (result.status === 200) {
          Cookies.set("userData", JSON.stringify(result.data), {
            expires: 500,
          });
          if (
            signIn({
              token: result.data.token,
              expiresIn: 300,
              tokenType: "Bearer",
              authState: {
                data: result.data.user,
              },
            })
          ) {
            navigate("/menu");
          }
          // console.log(result.data.role);
          setError("");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(err.response.data.message);
      });
    console.log(username, password);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${LoginImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <MdOutlineLocalShipping />
            </Avatar> */}
            <Avatar
              alt="Avatar"
              src={Login_icon}
              sx={{ m: 1, bgcolor: "primary.main", width: 120, height: 120 }}
            />
            <Typography component="h1" variant="h5" fontWeight="500">
              Welcome to Magic Post!
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                placeholder="Tên đăng nhập"
                name="username"
                autoComplete="username"
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                  onChange: (e) => {
                    setUserName(e.target.value);
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                  onChange: (e) => {
                    setPassword(e.target.value);
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng nhập
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
