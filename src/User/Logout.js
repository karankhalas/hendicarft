// src/pages/LogoutPage.jsx
import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Confing/firebase';

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
      navigate('/login'); // redirect after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleCancel = () => {
    navigate('/'); // back to dashboard or home
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #ECE9E6, #FFFFFF)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 400, width: '100%', p: 3, borderRadius: 4, boxShadow: 6 }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
            <LogoutIcon sx={{ fontSize: 50, color: '#d32f2f', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Are you sure you want to logout?
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={4}>
              You’ll be returned to the login screen.
            </Typography>
            <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
              <Button variant="contained" color="error" fullWidth onClick={handleLogout}>
                Logout
              </Button>
              <Button variant="outlined" fullWidth onClick={handleCancel}>
                Cancel
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LogoutPage;
