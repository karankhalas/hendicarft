import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { useWishlist } from "../Wishcontext";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Your Wishlist
      </Typography>

      {wishlist.length === 0 ? (
        <Typography variant="body1">Your wishlist is empty.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="wishlist table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price (₹)</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wishlist.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ height: 60, objectFit: "contain" }}
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="error"
                      onClick={() => removeFromWishlist(item.id)}
                      aria-label="remove from wishlist"
                    >
                      <CloseIcon />
                    </IconButton>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<ShoppingCartOutlinedIcon />}
                      sx={{ ml: 1 }}
                      // add your cart logic here
                    >
                      Add to Cart
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default Wishlist;
