import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "../../../style/transactionStaff/statistics.css";
import axios from "axios";


export default function StatisticsAdmin() {
  // Assuming these are fetched from the server
  
  
  const [id_workplace, setIDWorkplace] = React.useState("");
  const [totalOrders, setTotalOrders] = React.useState("");
  const [totalSuccessfulOrders, setTotalSuccessfulOrders] = React.useState("");


  function renderGatherPlace(array, select) {
    let row = '<option value="">Chọn điểm tập kết</option>';
    array.forEach((element) => {
      const valueExists = row.includes(`value="${element.id_workplace}"`);
      if (!valueExists) {
        row += `<option value="${element.id_workplace}">${element.id_workplace}</option>`;
      }
    });
    const selectElement = document.querySelector("#" + select);
    // console.log("selectElement:", selectElement);
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





  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("abcxalsdgjk");
  //   try {
  //     // Tạo URL cho request đầu tiên với tham số postalInformation=true
  //     const urlWithParam = new URL("http://localhost:3001/information/search");
  //     urlWithParam.searchParams.append("postalInformation", "true");
  
  //     // Gửi request đầu tiên
  //     const responseWithParam = await fetch(urlWithParam, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  
  //     if (responseWithParam.ok) {
  //       // console.log(responseWithParam.data);
  //       setTotalSuccessfulOrders(responseWithParam.data.result);
  //       // Thêm logic xử lý khi đăng ký thành công
  //     } else {
  //       console.error("Failed to grant account to teller");
  //     }
  
  //     // Gửi request thứ hai
  //     const responseWithoutParam = await fetch("http://localhost:3001/information", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  
  //     if (responseWithoutParam.ok) {
  //       console.log(responseWithoutParam);
  //       setTotalOrders(responseWithoutParam.data.result);
  //       // Thêm logic xử lý khi đăng ký thành công
  //     } else {
  //       console.error("Failed to grant account to teller");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  async function handleSubmit() {
    const baseUrl = "http://localhost:3001/information/search";
    const params = {
      'postalInformation.status': "Đang Giao",
      'postalInformation.source': id_workplace,
    };
    axios
      .get(baseUrl, { params })
      .then((response) => {
        setTotalSuccessfulOrders(response.data.result);
        console.log("total", totalSuccessfulOrders)
        // console.log("param", params)
      })
      .catch((error) => {
        console.error("Error:", error);
      });



    const baseUrltotal = "http://localhost:3001/information/search";
    const paramstotal = {
      'postalInformation.status': "Đang Ở",
      'postalInformation.source': id_workplace,
    };
    axios
      .get(baseUrltotal, { paramstotal })
      .then((response) => {
        setTotalOrders(response.data.result);
        console.log(totalOrders)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


  return (
    <div className="stats-container">
      <div className="seclect">
        <select
          id="gatherPlace"
          width="50%"
          label="Điểm tập kết"
          onChange={(e) => {setIDWorkplace(e.target.value);}}
          margin="normal"
        ></select>
      </div>
      <div>
        <button onClick={handleSubmit}>Thống Kê</button>
      </div>
      <div className="card">
        <Card className="stats-card">
          <CardContent>
            <Typography className="stats-title" color="text.secondary">
              Tổng số đến
            </Typography>
            <Typography className="stats-value" variant="h4">
              {totalOrders.length}
            </Typography>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent>
            <Typography className="stats-title" color="text.secondary">
              Tổng số đi
            </Typography>
            <Typography className="stats-value" variant="h4">
              {totalSuccessfulOrders.length}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
