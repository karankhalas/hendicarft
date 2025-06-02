import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from "@mui/material";
import OIP from "../Admin/Admin/OIP.jpeg";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../src/Confing/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../User/Authcontext";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileno: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Register user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Save additional user info to Firestore
      await addDoc(collection(db, "registration"), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        mobileno: formData.mobileno,
        gender: formData.gender,
        createdAt: new Date(),
      });

      // Save user to context
      login({ email: user.email, uid: user.uid });

      window.alert(`Registration successful for ${formData.name}!`);
      navigate("/checkout");
    } catch (error) {
      console.error("Registration error:", error.message);
      window.alert(`Error: ${error.message}`);
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e90ff, #ff69b4)",
      }}
    >
      <Grid item xs={12} md={6} lg={8}>
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            borderRadius: "15px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Form Section */}
            <Box
              component="form"
              sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
              onSubmit={handleSubmit}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ color: "#6a11cb", fontWeight: "bold" }}
              >
                Registration Form
              </Typography>

              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Mobile No."
                name="mobileno"
                value={formData.mobileno}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
              />
              <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                Gender:
              </Typography>
              <RadioGroup
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>

              <Box
                sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#6a11cb",
                    ":hover": { backgroundColor: "#5b10b3" },
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/login")}
                  sx={{
                    borderColor: "#6a11cb",
                    color: "#6a11cb",
                    ":hover": { borderColor: "#5b10b3", color: "#5b10b3" },
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Button>
              </Box>
              <Typography align="center">
                Already have an account? Click Login.
              </Typography>
            </Box>

            {/* Image Section */}
            <Box
              component="img"
              src={OIP}
              alt="Registration"
              sx={{
                flexShrink: 0,
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;
