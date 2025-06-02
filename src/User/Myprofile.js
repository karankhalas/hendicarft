// src/pages/ProfilePage.jsx
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import userAvatar from '../Admin/Image/man.png'; // Replace with your user image or use default

const ProfilePage = () => {
  // Example static user data (replace with dynamic data if needed)
  const user = {
    name: "KARAN KHALAS",
    email: "khalaskaran@.com",
    phone: "+91 9106089227",
    address: "Mukhwas Gali, Manekchok, Ahmedabad",
  };

  const handleEditProfile = () => {
    // Logic for editing profile
    alert("Edit profile clicked");
  };

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        backgroundColor: '#f7f9fc',
      }}
    >
      <Card sx={{ maxWidth: 500, width: '100%', p: 3, borderRadius: 4, boxShadow: 6 }}>
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Avatar
              alt={user.name}
              src={userAvatar}
              sx={{ width: 100, height: 100, boxShadow: 3 }}
            />
            <Typography variant="h5" fontWeight="bold">
              {user.name}
            </Typography>
            <Divider sx={{ width: '100%', mb: 2 }} />
            <Box width="100%">
              <Typography variant="subtitle1" fontWeight="medium">
                📧 Email:
              </Typography>
              <Typography variant="body1" mb={2}>
                {user.email}
              </Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                📞 Phone:
              </Typography>
              <Typography variant="body1" mb={2}>
                {user.phone}
              </Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                🏠 Address:
              </Typography>
              <Typography variant="body1">{user.address}</Typography>
            </Box>

            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleEditProfile}
              sx={{ mt: 2 }}
            >
              Edit Profile
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;
