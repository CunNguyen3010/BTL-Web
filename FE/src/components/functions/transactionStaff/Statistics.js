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
            Successful Orders
          </Typography>
          <Typography className="stats-value" variant="h4">
            {totalSuccessfulOrders}
          </Typography>
          <Button variant="contained">Thống kê</Button>
        </CardContent>
      </Card>
      <Card className="stats-card">
        <CardContent>
          <Typography className="stats-title" color="text.secondary">
            Unsuccessful Orders
          </Typography>
          <Typography className="stats-value" variant="h4">
            {totalUnsuccessfulOrders}
          </Typography>
          <Button variant="contained">Thống kê</Button>
        </CardContent>
      </Card>
    </div>
  );
}
