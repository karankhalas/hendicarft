import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Cartcontext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const safePrice = (price) => {
    const num = Number(price);
    return isNaN(num) ? 0 : num;
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + safePrice(item.price) * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems: cart } });
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1000, margin: "auto" }}>
      <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
        Your Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="text.secondary">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table aria-label="cart table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price (₹)</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total (₹)</TableCell>
                  <TableCell align="center">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => {
                  const priceNum = safePrice(item.price);
                  const quantity = item.quantity || 1;
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <img
                          src={item.image || ""}
                          alt={item.name || "Product"}
                          style={{ width: 80, height: 80, objectFit: "contain" }}
                        />
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{priceNum.toFixed(2)}</TableCell>
                      <TableCell>
                        <TextField
                          type="number"
                          size="small"
                          inputProps={{ min: 1 }}
                          value={quantity}
                          onChange={(e) =>
                            updateQuantity &&
                            updateQuantity(item.id, Math.max(1, +e.target.value))
                          }
                          sx={{ width: 70 }}
                        />
                      </TableCell>
                      <TableCell>{(priceNum * quantity).toFixed(2)}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={() => removeFromCart && removeFromCart(item.id)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <Divider sx={{ my: 3 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Total: ₹{totalPrice.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
