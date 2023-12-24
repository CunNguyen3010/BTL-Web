import * as React from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { MdArrowUpward } from "react-icons/md";
import { styled } from "@mui/system";
import home from "../../assets/videos/home.mp4";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { Link } from "react-router-dom";

const CustomButton = styled(Button)`
  background-color: #ffffff;
  color: #1d1d1d;
  &:hover {
    background-color: #c0c0c0;
  }
`;

const CenteredTextContainer = styled(Box)`
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default function Home() {
  const [backToTop, setBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Header */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar
            sx={{
              padding: "0",
              margin: "0",
              backgroundColor: "#008ae6",
              "@media (max-width: 600px)": {
                flexDirection: "column",
                position: "static",
              },
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flex: 1 }}>
              Hotline: 0979216519
            </Typography>

            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: "1",
              }}
            >
              <b>
                <i>MAGIC POST</i>
              </b>
            </Typography>
            <Link to="/login">
              <CustomButton startIcon={<LoginIcon />} color="inherit">
                Đăng nhập
              </CustomButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Video Background */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <video
          src={home}
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "auto",
            position: "relative",
            zIndex: 1,
          }}
        />
        <CenteredTextContainer
          sx={{ zIndex: 2, color: "white", textAlign: "center" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "48px", sm: "64px", md: "100px" },
              color: "black",
              margin: "0",
              padding: "0",
            }}
          >
            <b>MAGIC POST</b>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "black",
              margin: "0",
              padding: "0",
            }}
          >
            <i>Your Packet, Your Choice</i>
          </Typography>
        </CenteredTextContainer>
      </Box>

      {/* Tra cứu bưu gửi */}
      <Box
        sx={{
          width: "100%",
          height: "auto",
          minHeight: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f6f6ee",
        }}
      >
        <div
          style={{
            width: { xs: "80%", sm: "60%", md: "40%" },
            backgroundColor: "#ffffff",
            padding: "20px 20px",
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{
              alignItems: "left",
              width: "100%",
              margin: "1px solid",
            }}
          >
            <Typography fullWidth variant="h5">
              TRA CỨU BƯU GỬI
            </Typography>
            <Stack direction="row" spacing={2}>
              <TextField sx={{ width: "80%" }} placeholder="Nhập mã bưu gửi" />
              <Button
                startIcon={<SearchIcon />}
                variant="contained"
                size="small"
              >
                Tra cứu
              </Button>
            </Stack>
          </Stack>
        </div>
      </Box>

      {/* ImageSlider */}
      <Box>
        <ImageSlider slides={SliderData} />
      </Box>

      {/* Grid Section */}
      <Grid
        container
        padding="50px"
        sx={{
          backgroundColor: "#212D33",
          height: "auto",
          minHeight: "20vh",
          width: "100%",
        }}
      >
        <Grid item xs={12} md={5} sx={{ color: "#ffffff" }}>
          <Typography variant="h6">
            TỔNG CÔNG TY CỔ PHẦN BƯU CHÍNH MAGIC POST
          </Typography>
          <Typography variant="body1">
            Magic Post là doanh nghiệp hàng đầu cung cấp dịch vụ chuyển phát
            nhanh hàng hoá, bưu kiện trong nước, quốc tế tại Việt Nam.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} sx={{ color: "#ffffff" }}>
          <Typography variant="h6">THÔNG TIN LIÊN HỆ</Typography>
          <Typography variant="body1">
            <LocationOnIcon /> VP giao dịch: Toà nhà Magic Post, Ngõ 30 Phạm Văn
            Đồng, Cầu Giấy, Hà Nội
          </Typography>
          <Typography variant="body1">
            <EmailIcon /> cskh@magicpost.com.vn
          </Typography>
          <Typography variant="body1">
            <ContactPhoneIcon /> 0979216519
          </Typography>
        </Grid>
      </Grid>

      {/* Back to Top Button */}
      {backToTop && (
        <Button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "50px",
            borderRadius: "50%",
          }}
          onClick={scrollUp}
        >
          <MdArrowUpward />
        </Button>
      )}
    </div>
  );
}
