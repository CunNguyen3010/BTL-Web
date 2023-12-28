import React, { useState, useEffect } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import axios from "axios";
import "../../../style/transactionStaff/ShippingOrder.css";
export default function ShippingOrder() {
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
    let row = '<option value="">Chọn điểm tập kết</option>';
    array.forEach((element) => {
      row += `<option value="${element.id_workplace}">${element.id_workplace}</option>`;
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
  useEffect(() => {
    getGatherPlace();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  // const handleSubmitOrder = async () => {
  //   try {
  //     const respone = await fetch("http://localhost:3001/information/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({

  //       }),

  //   }) catch (error) {
  //     console.log(error);
  //   }
  // }}
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
                onChange={handleChange("idOrder")}
                margin="normal"
              />

              <select
                id="gatherPlace"
                width="50%"
                label="Điểm tập kết"
                onChange={handleChange("gatherPlace")}
                margin="normal"
              ></select>
              <TextField
                id="note"
                width="50%"
                label="Ghi chú"
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
