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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  //Hàm render vào Select
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
  // Hàm xử lý submit
  const handleSubmit = () => {
    // handle form submission logic here
    let btn = document.getElementById("noti");
    let p = document.createElement("p");
    let notification = document.createTextNode("Chuyển hàng thành công");
    p.appendChild(notification);
    p.style.backgroundColor = "#1565C0";
    p.style.padding = "10px";
    p.style.marginTop = "10vh";
    p.style.color = "white";
    btn.appendChild(p);
  };

  useEffect(() => {
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
  }, []);

  const [putdata, setPutdata] = useState({});

  useEffect(() => {
    async function handleGetOrder() {
      const baseUrl = "http://localhost:3001/information/search";
      const params = {
        id: values.idOrder,
      };
      axios
        .get(baseUrl, { params })
        .then((response) => {
          setPutdata(response.data.result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    handleGetOrder();
  }, [values.idOrder]);
  console.log(putdata);
  useEffect(() => {
    async function handlePutOrder() {
      if (putdata.postalInformation) {
        putdata.postalInformation.status = "Đang giao";
        putdata.postalInformation.destination = values.gatherPlace;

        try {
          const response = await axios.put(
            "http://localhost:3001/information/",
            putdata
          );
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.error("Postal information is undefined in putdata");
      }
    }
    handlePutOrder();
  }, [putdata, values.gatherPlace]);

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
          <form>
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
        <Box sx={{ textAlign: "center", margin: "auto" }}>
          <Button
            type="submit"
            width="50%"
            variant="contained"
            color="primary"
            style={{
              marginTop: "1rem",
              marginRight: "35%",
            }}
            onClick={handleSubmit}
          >
            XÁC NHẬN
          </Button>
        </Box>
        <div id="noti"></div>
      </Box>
    </Box>
  );
}
