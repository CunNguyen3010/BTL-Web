import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

const PointsTransactionForm = () => {
  const [values, setValues] = useState({
    employeeId: "",
    cashBonus: "",
    endOfYearBonus: "",
    transactionComment: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
          backgroundColor: "#FFECD6",
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
                width="50%"
                required
                label="Mã nhân viên"
                value={values.employeeId}
                onChange={handleChange("employeeId")}
                margin="normal"
              />
              <TextField
                width="50%"
                required
                label="Mã bưu gửi"
                value={values.cashBonus}
                onChange={handleChange("cashBonus")}
                margin="normal"
              />
              <TextField
                width="50%"
                required
                label="Điểm tập kết"
                value={values.endOfYearBonus}
                onChange={handleChange("endOfYearBonus")}
                margin="normal"
              />
              <TextField
                width="50%"
                label="Ghi chú"
                value={values.transactionComment}
                onChange={handleChange("transactionComment")}
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
};

export default PointsTransactionForm;
