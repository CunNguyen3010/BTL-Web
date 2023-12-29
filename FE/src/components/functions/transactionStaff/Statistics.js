import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
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

  useEffect(() => {
    // Lấy giá trị từ cookie khi component được mount
    const userDataFromCookie = Cookies.get("userData");
    if (userDataFromCookie) {
      const userData = JSON.parse(userDataFromCookie);
      // console.log(userData)
      setIDWorkplace(userData.user.id_workplace || ""); // Sử dụng giá trị mặc định hoặc giá trị từ userData
    }
  }, []); // Chạy chỉ một lần khi component mount

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

  async function handleSubmit() {
    const baseUrl = "http://localhost:3001/information/search";
    const params = {
      "postalInformation.status": "Đang Giao",
      "postalInformation.source": id_workplace,
    };

    try {
      const response1 = await axios.get(baseUrl, { params });
      setTotalSuccessfulOrders(response1.data.result);
      console.log("total", totalSuccessfulOrders);

      // Gửi request dưới chỉ khi request trên đã hoàn thành
      const baseUrltotal = "http://localhost:3001/information/search";
      const paramstotal = {
        "postalInformation.status": "Đang Ở",
        "postalInformation.source": id_workplace,
      };

      const response2 = await axios.get(baseUrltotal, { params: paramstotal });
      setTotalOrders(response2.data.result);
      console.log(totalOrders);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="stats-container">
      <div>
        <button onClick={handleSubmit}>Thống Kê</button>
      </div>
      <div className="card">
        <Card className="stats-card" style={{ height: "100px" }}>
          <CardContent>
            <Typography className="stats-title" color="text.secondary">
              Tổng số đến
            </Typography>
            <Typography className="stats-value" variant="h4">
              {totalOrders.length}
            </Typography>
          </CardContent>
        </Card>
        <Card className="stats-card" style={{ height: "100px" }}>
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
