import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import img from "../Admin/Image/a1.jpg";
import img1 from "../Admin/Image/a2.jpg";
import ta1 from "../Admin/Image/to1.jpeg";
import na1 from "../Admin/Image/ox1.jpg";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Designer Purse", img: img, route: "/Purse" },
  { id: 2, name: "Designer Dandiya", img: img1, route: "/Dandiya" },
  { id: 3, name: "Designer Toran", img: ta1, route: "/Toran" },
  { id: 4, name: "Oxidised Jewellery", img: na1, route: "/Jewellery" },
];

const Catalog = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Banner Header */}
      <Box
        sx={{
          height: "300px",
          backgroundImage: `url(${require("../Admin/Image/ck1.webp")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: 4,
        }}
      />

      {/* Product Grid */}
      <Box sx={{ px: 4, py: 6, backgroundColor: "#f9f9f9" }}>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id}>
              <Card
                sx={{
                  width: 300,
                  height: 350,
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  bgcolor: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.img}
                  alt={product.name}
                  sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
                <CardContent>
                  <Typography variant="h6" align="center" fontWeight="bold">
                    {product.name}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(product.route)}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Catalog;
