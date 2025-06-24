// src/pages/OrderConfirmation.jsx

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId;

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        🎉 Thank You for Your Order!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Your order ID is: <strong>{orderId}</strong>
      </Typography>
      <Typography sx={{ my: 2 }}>
        We’ve received your order and will contact you shortly.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Box>
  );
};

export default OrderConfirmation;
