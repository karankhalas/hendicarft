import React, { useState, useEffect } from 'react';
import {
  LocalShipping as LocalShippingIcon,
  SupportAgent as SupportAgentIcon,
  Lock as LockIcon,
  Replay as ReplayIcon,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const sliderImages = [
  { img: require("../Admin/Image/s1.jpg"), title: "Elegant Handicrafts" },
  { img: require("../Admin/Image/s2.jpg"), title: "Traditional Designs" },
  { img: require("../Admin/Image/s3.jpg"), title: "Artistry & Passion" }
];

const features = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Free Shipping",
    description: "Free shipping worldwide",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
    title: "Support 24/7",
    description: "Contact us 24 hours a day",
  },
  {
    icon: <LockIcon sx={{ fontSize: 40, color: "#f57c00" }} />,
    title: "Secure Payments",
    description: "100% payment protection",
  },
  {
    icon: <ReplayIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
    title: "Easy Return",
    description: "Simple returns policy",
  },
];

const categories = [
  {
    title: "Designer Dandiya",
    image: require("../Admin/Image/dandiya10.jpeg"),
    path: "/Dandiya"
  },
  {
    title: "Navratri Jewellery",
    image: require("../Admin/Image/ox4.jpg"),
    path: "/Jewellery"
  },
  {
    title: "Designer Purser",
    image: require("../Admin/Image/purse4.jpg"),
    path: "/Purse"
  },
  {
    title: "Designer Toran",
    image: require("../Admin/Image/toran1.jpeg"),
    path: "/Toran"
  }
];

function Mainscreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>

      {/* Slider Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 250, md: 400 },
          overflow: "hidden",
          borderRadius: 4,
          mx: { xs: 2, md: 6 },
          mt: 3,
          boxShadow: 4,
        }}
      >
        {sliderImages.map((slide, index) => (
          <Box
            key={index}
            component="img"
            src={slide.img}
            alt={slide.title}
            sx={{
              position: "absolute",
              top: 0,
              left: `${(index - currentSlide) * 100}%`,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "left 0.5s ease-in-out",
            }}
          />
        ))}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            {sliderImages[currentSlide].title}
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => navigate("/products")}>
            Explore More
          </Button>
        </Box>
      </Box>

      {/* Product Categories Section */}
      <Box sx={{ py: 6, px: { xs: 2, md: 6 }, backgroundColor: "#fff0f5", textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#6a11cb", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}
        >
          Explore Our Categories
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Paper
                elevation={5}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  ":hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  component="img"
                  src={category.image}
                  alt={category.title}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderBottom: "1px solid #eee",
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight="bold" color="text.primary">
                    {category.title}
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      mt: 1,
                      background: "#6a11cb",
                      ":hover": { background: "#5b10b3" },
                    }}
                    onClick={() => navigate(category.path)}
                  >
                    View Products
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 6, px: { xs: 2, md: 6 }, backgroundColor: "#e6f0ff" }}>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                  transition: "transform 0.3s",
                  ":hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <Box mb={2}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#666" }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

    </Box>
  );
}

export default Mainscreen;
