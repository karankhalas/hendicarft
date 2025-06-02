import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import ka from '../Admin/Image/ka.jpg';
import { auth } from '../Confing/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../User/Authcontext"; // Use your context

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Update context when login successful

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      const user = userCredential.user;

      // Save user to context
      login({ email: user.email, uid: user.uid });

      window.alert("Login successful!");
      navigate("/"); // Go to homepage or dashboard
    } catch (error) {
      console.error("Login failed:", error.message);
      window.alert("Login failed. Please check your credentials.");
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
            {/* Login Form */}
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ color: "#6a11cb", fontWeight: "bold" }}
              >
                Login
              </Typography>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleChange}
                fullWidth
                required
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 2,
                }}
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
                  Submit
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/registration")}
                  sx={{
                    borderColor: "#6a11cb",
                    color: "#6a11cb",
                    ":hover": { borderColor: "#5b10b3", color: "#5b10b3" },
                    fontWeight: "bold",
                  }}
                >
                  Registration
                </Button>
              </Box>
              <Typography align="center">
                Don't have an account? Click on Registration.
              </Typography>
            </Box>

            {/* Right Side Image */}
            <Box
              component="img"
              src={ka}
              alt="Login Illustration"
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
}

export default LoginPage;
