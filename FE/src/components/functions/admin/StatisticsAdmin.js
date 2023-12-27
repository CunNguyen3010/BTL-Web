import React from "react";
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

export default function StatisticsAdmin() {
  // Assuming these are fetched from the server
  const totalSuccessfulOrders = 1000;
  const totalUnsuccessfulOrders = 500;
  const [transaction, setTransaction] = React.useState("");
  const [gathering, setGathering] = React.useState("");

  const handleChange1 = (event) => {
    setTransaction(event.target.value);
  };
  const handleChange2 = (event) => {
    setGathering(event.target.value);
  };

  return (
    <div className="stats-container">
      <div className="seclect">
        <Box sx={{ minWidth: 120, marginBottom: "2em" }}>
          <FormControl fullWidth>
            <InputLabel id="select-label">Điểm giao dịch</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={transaction}
              label="transaction"
              onChange={handleChange1}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select-label">Điểm tập kết</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={gathering}
              label="gathering"
              onChange={handleChange2}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div>
        <Button variant="contained">Thống Kê</Button>
      </div>
      <div className="card">
        <Card className="stats-card">
          <CardContent>
            <Typography className="stats-title" color="text.secondary">
              Tổng số hàng gửi
            </Typography>
            <Typography className="stats-value" variant="h4">
              {totalSuccessfulOrders}
            </Typography>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent>
            <Typography className="stats-title" color="text.secondary">
              Tổng số hàng nhận
            </Typography>
            <Typography className="stats-value" variant="h4">
              {totalUnsuccessfulOrders}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
