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

import img from "../Admin/Image/to1.jpeg";

function DogShow() {
  const [petList, setPetList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // 👈 For modal image

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const snapshot = await getDocs(collection(db, "toran"));
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
        {/* Hero Banner */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
          style={{
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginBottom: "10px",
            border: "1px solid black",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                padding: "10px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(209, 183, 10, 0.15)",
                maxWidth: "45%",
                marginRight: "30px",
                marginBottom: "10px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
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
                  color: "#fff000",
                  textAlign: "center",
                }}
              >
                Handwoven Beauty for Your Home’s First Impression.
              </motion.h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Products Grid */}
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
                    justifyContent: "space-between",
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
                    onClick={() => setSelectedImage(pet.image)} // 👈 Click handler
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
        </div>

        {/* ✅ Image Modal */}
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
              backgroundColor: "white",
              padding: 2,
              borderRadius: 2,
              outline: "none",
              maxWidth: "80%",
              maxHeight: "80%",
              boxShadow: 24,
            }}
          >
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                width: "100%",
                height: "auto",
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
