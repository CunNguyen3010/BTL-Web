import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "../../../style/transactionStaff/statistics.css";

export default function Statistics() {
  // Assuming these are fetched from the server
  const totalSuccessfulOrders = 1000;
  const totalUnsuccessfulOrders = 500;

  return (
    <div className="stats-container">
      <Card className="stats-card">
        <CardContent>
          <Typography className="stats-title" color="text.secondary">
            Tổng số đơn thành công
          </Typography>
          <Typography className="stats-value" variant="h4">
            {totalSuccessfulOrders}
          </Typography>
        </CardContent>
      </Card>
      <Card className="stats-card">
        <CardContent>
          <Typography className="stats-title" color="text.secondary">
            Tổng số đơn chưa thành công
          </Typography>
          <Typography className="stats-value" variant="h4">
            {totalUnsuccessfulOrders}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
