import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
} from "@mui/material";
import { db } from "../Confing/firebase";
import { collection, getDocs } from "firebase/firestore";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useWishlist } from "../Wishcontext";
import { useCart } from "../Cartcontext";

function DogShow() {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [petList, setPetList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const collectionsToFetch = [
          "oxidisedjewellery",
          "dandiya",
          "purse",
          "toran",
        ];
        let allPets = [];

        for (const colName of collectionsToFetch) {
          const snapshot = await getDocs(collection(db, colName));
          const pets = snapshot.docs.map((doc) => ({
            id: doc.id,
            type: colName.replace("manage", ""),
            ...doc.data(),
          }));
          allPets = [...allPets, ...pets];
        }

        setPetList(allPets);
      } catch (err) {
        console.error("Error fetching pets:", err);
      }
    };

    fetchPets();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <div className="container py-3">
        <Grid container spacing={3} justifyContent="center">
          {petList.map((pet, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  width: "280px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 1,
                }}
                elevation={3}
              >
                <CardMedia
                  component="img"
                  image={pet.image}
                  alt={pet.name}
                  sx={{
                    objectFit: "contain",
                    maxHeight: 130,
                    width: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick(pet.image)}
                />
                <CardContent
                  sx={{
                    width: "100%",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      noWrap
                    >
                      {pet.name}
                    </Typography>

                    <Typography variant="body2" gutterBottom sx={{ mb: 1 }}>
                      <strong>Description:</strong> {pet.description}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Price:</strong> ₹{pet.price}
                    </Typography>
                  </Box>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mt: 2 }}
                  >
                    <IconButton
                      color="error"
                      onClick={() => addToWishlist({ ...pet })}
                      sx={{ p: 1 }}
                    >
                      <FavoriteBorderIcon />
                    </IconButton>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => addToCart({ ...pet })}
                      sx={{
                        flexGrow: 1,
                        textTransform: "none",
                        fontWeight: "500",
                        whiteSpace: "nowrap",
                      }}
                      startIcon={<ShoppingCartOutlinedIcon />}
                    >
                      Add to Cart
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Image Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default DogShow;
