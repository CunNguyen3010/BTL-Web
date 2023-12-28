import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

export default function ShippingOrder() {
  // const [idOrder, setIdOrder] = useState("");
  // const [idOrder,setIdOrder] = useState("")
  // const [idOrder,setIdOrder] = useState("")

  const [values, setValues] = useState({
    idOrder: "",
    gatherPlace: "",
    note: "",
  });
  console.log(values);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // let gatherPlace = {};
  function renderGatherPlace(array, select) {
    let row = ' <MenuItem disable value="">Chọn</MenuItem>';
    array.forEach((element) => {
      row += `<MenuItem >${element.id_workplace}</MenuItem>`;
    });
    const selectElement = document.querySelector("#" + select);
    if (selectElement) {
      selectElement.innerHTML = row;
    } else {
      console.error("Element with id '" + select + "' not found.");
    }
  }
  async function getGatherPlace() {
    try {
      let data = await axios.get("http://localhost:3001/auth");
      let gatherPlace = data.data;
      renderGatherPlace(gatherPlace, "gatherPlace");
    } catch (e) {
      console.log(e);
    }
  }
  getGatherPlace();

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        minHeight: "100vh",
        marginTop: "10vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          width: "30vw",
          height: "50%",
          padding: "20px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">
            <b>Điểm tập kết</b>
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                m: "auto",
              }}
            >
              <TextField
                id="idOrder"
                width="50%"
                required
                label="Mã bưu gửi"
                value={values.idOrder}
                onChange={handleChange("idOrder")}
                margin="normal"
              />

              <Select
                id="gatherPlace"
                width="50%"
                label="Điểm tập kết"
                // value={values.gatherPlace}
                onChange={handleChange("gatherPlace")}
                margin="normal"
              >
                <MenuItem value="">Chọn Điểm tập kết</MenuItem>
              </Select>
              <TextField
                id="note"
                width="50%"
                label="Ghi chú"
                value={values.note}
                onChange={handleChange("note")}
                margin="normal"
              />
            </Box>
          </form>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            width="50%"
            variant="contained"
            color="primary"
            style={{
              marginTop: "1rem",
            }}
          >
            XÁC NHẬN
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
