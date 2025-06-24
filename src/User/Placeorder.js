import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../User/Authcontext";

function PlaceOrderPage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get cart and shipping info from location state
  const { cartItems = [], shippingInfo = {} } = location.state || {};

  // Price calculations
  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const shippingPrice = itemsPrice > 500 ? 0 : 40;
  const taxPrice = itemsPrice * 0.18;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const handlePlaceOrder = () => {
    alert("✅ Your order has been placed!");
    // Here, send order to backend or Firebase if needed
    navigate("/order-success");
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Review & Place Your Order
      </Typography>

      <Grid container spacing={4}>
        {/* LEFT COLUMN */}
        <Grid item xs={12} md={8}>
          {/* Shipping Info */}
          <Paper variant="outlined" sx={{ mb: 3, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Shipping Information
            </Typography>
            <Typography>
              <strong>Name:</strong> {shippingInfo.firstName} {shippingInfo.lastName}
              <br />
              <strong>Email:</strong> {currentUser?.email || "guest@example.com"}
              <br />
              <strong>Phone:</strong> {shippingInfo.phone}
              <br />
              <strong>Address:</strong> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.zip}
            </Typography>
          </Paper>

          {/* Order Items */}
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Order Items
            </Typography>

            {cartItems.length === 0 ? (
              <Typography>No items in your cart.</Typography>
            ) : (
              cartItems.map((item) => (
                <Box
                  key={item.id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py={1}
                  borderBottom="1px solid #eee"
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <CardMedia
                      component="img"
                      image={item.image || "/placeholder.png"}
                      alt={item.name}
                      sx={{ width: 64, height: 64, borderRadius: 1 }}
                    />
                    <Box>
                      <Typography>{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Qty: {item.quantity || 1}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography fontWeight={500}>
                    ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                  </Typography>
                </Box>
              ))
            )}
          </Paper>
        </Grid>

        {/* RIGHT COLUMN - Order Summary */}
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>

              <Box display="flex" justifyContent="space-between" my={1}>
                <Typography>Items Total:</Typography>
                <Typography>₹{itemsPrice.toFixed(2)}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between" my={1}>
                <Typography>Shipping:</Typography>
                <Typography>
                  ₹{shippingPrice === 0 ? "Free" : shippingPrice.toFixed(2)}
                </Typography>
              </Box>

              <Box display="flex" justifyContent="space-between" my={1}>
                <Typography>Tax (18% GST):</Typography>
                <Typography>₹{taxPrice.toFixed(2)}</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="space-between" my={1}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6">₹{totalPrice.toFixed(2)}</Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handlePlaceOrder}
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

export default PlaceOrderPage;
