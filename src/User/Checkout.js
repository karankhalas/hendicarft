// src/pages/CheckoutPage.jsx

import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  IconButton,
  Alert,
  Snackbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../User/Authcontext";
import { db } from "../Confing/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CheckoutPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: currentUser?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [loading, setLoading] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (currentUser) {
      setFormData(prev => ({ ...prev, email: currentUser.email }));
    }
  }, [currentUser]);

  const safePrice = (value) => {
    const n = Number(value);
    return isNaN(n) ? 0 : n;
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + safePrice(item.price) * (item.quantity || 1),
    0
  );

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!currentUser) {
      setShowLoginAlert(true);
      return;
    }

    try {
      setLoading(true);
      const orderRef = await addDoc(collection(db, "orders"), {
        userId: currentUser.uid,
        email: formData.email,
        items: cartItems,
        shippingInfo: formData,
        totalAmount: subtotal,
        status: "Pending",
        createdAt: serverTimestamp(),
      });

      setOrderId(orderRef.id);
      setOrderSuccess(true);
      
      // Clear cart after successful order
      setTimeout(() => {
        navigate("/", { state: { orderPlaced: true } });
      }, 3000);
    } catch (error) {
      console.error("Order placement error:", error);
      alert("Error placing order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4, width: "100%", maxWidth: "1400px", mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Checkout
      </Typography>

      <Snackbar
        open={showLoginAlert}
        autoHideDuration={6000}
        onClose={() => setShowLoginAlert(false)}
      >
        <Alert severity="error" onClose={() => setShowLoginAlert(false)}>
          You need to login first to place an order!
        </Alert>
      </Snackbar>

      <Snackbar
        open={orderSuccess}
        autoHideDuration={6000}
        onClose={() => setOrderSuccess(false)}
      >
        <Alert severity="success" onClose={() => setOrderSuccess(false)}>
          Order placed successfully! Your order ID is {orderId}. You'll be redirected to home page.
        </Alert>
      </Snackbar>

      <Grid container spacing={4}>
        {/* Shipping Form */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Shipping Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="ZIP Code"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Order Summary
          </Typography>
          <Card elevation={3}>
            <CardContent>
              <TableContainer component={Paper} sx={{ mb: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Price (₹)</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Total (₹)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => {
                      const price = safePrice(item.price);
                      const quantity = item.quantity || 1;
                      return (
                        <TableRow key={item.id}>
                          <TableCell>
                            <img
                              src={item.image || ""}
                              alt={item.name || "Product"}
                              style={{ width: 50, height: 50, objectFit: "contain" }}
                            />
                          </TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell align="right">₹{price.toFixed(2)}</TableCell>
                          <TableCell align="right">{quantity}</TableCell>
                          <TableCell align="right">
                            ₹{(price * quantity).toFixed(2)}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>

              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">Subtotal:</Typography>
                <Typography variant="h6">₹{subtotal.toFixed(2)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">Shipping:</Typography>
                <Typography variant="h6">₹0.00</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                  Total:
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  ₹{subtotal.toFixed(2)}
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3, py: 1.5, fontSize: "1rem" }}
                onClick={handlePlaceOrder}
                disabled={loading || cartItems.length === 0}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Place Order"
                )}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;