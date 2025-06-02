import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Modal,
} from "@mui/material";
import { db } from "../Confing/firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

import img from "../Admin/Image/purse21.jpg";

function DogShow() {
  const [petList, setPetList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // 👈 to store clicked image

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const snapshot = await getDocs(collection(db, "purse"));
        const pets = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPetList(pets);
      } catch (err) {
        console.error("Error fetching pets:", err);
      }
    };

    fetchPets();
  }, []);

  return (
    <div>
      <Box sx={{ p: 3 }}>
        {/* Hero banner */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
          style={{
            height: "300px",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginBottom: "10px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            style={{
              backgroundColor: "rgba(221, 238, 25, 0.97)",
              padding: "10px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(199, 209, 10, 0.82)",
              maxWidth: "45%",
              marginRight: "30px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                margin: 0,
                fontSize: "1.5rem",
                fontWeight: "600",
                fontFamily: "'Poppins', sans-serif",
                color: "#e12729",
              }}
            >
              Handmade Luxury for Every Occasion
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Product Grid */}
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
                {/* ✅ Click to show image in modal */}
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
                  onClick={() => setSelectedImage(pet.image)}
                />
                <CardContent sx={{ width: "100%" }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {pet.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Name:</strong> {pet.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Description:</strong> {pet.description}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Price:</strong> ₹{pet.price}
                  </Typography>
                  <Button fullWidth variant="contained" color="primary">
                    Buy
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* ✅ Modal for image popup */}
        <Modal
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: 2,
              maxWidth: "90%",
              maxHeight: "80%",
            }}
          >
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Modal>
      </Box>
    </div>
  );
}

export default DogShow;
