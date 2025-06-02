import React, { useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../User/Authcontext";

function CheckoutPage({ cartItems = [] }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  // Calculate total price
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    // You can add order saving logic here
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        {/* Billing Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Billing Information
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={currentUser?.email || ""}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Phone Number" type="tel" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Address" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="City" required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="State" required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="ZIP Code" required />
            </Grid>
          </Grid>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Order Summary
          </Typography>

          <Card>
            <CardContent>
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  display="flex"
                  justifyContent="space-between"
                  mb={1}
                >
                  <Typography>
                    {item.name} x {item.quantity || 1}
                  </Typography>
                  <Typography>
                    ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                  </Typography>
                </Box>
              ))}
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6">₹{subtotal.toFixed(2)}</Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handlePlaceOrder}
                disabled={!currentUser}
              >
                Place Order
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CheckoutPage;
