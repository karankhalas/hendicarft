// src/pages/ProfilePage.jsx
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Stack,
} from '@mui/material';
import userAvatar from '../Admin/Image/man.png';
import { useAuth } from '../User/Authcontext';

const ProfilePage = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">Loading profile...</Typography>
      </Box>
    );
  }

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
              alt={currentUser.name}
              src={userAvatar}
              sx={{ width: 100, height: 100, boxShadow: 3 }}
            />
            <Typography variant="h5" fontWeight="bold">
              {currentUser.name}
            </Typography>
            <Divider sx={{ width: '100%', mb: 2 }} />
            <Box width="100%">
              <Typography variant="subtitle1" fontWeight="medium">
                📧 Email:
              </Typography>
              <Typography variant="body1" mb={2}>
                {currentUser.email}
              </Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                📞 Phone:
              </Typography>
              <Typography variant="body1" mb={2}>
                {currentUser.mobileno}
              </Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                🏠 Gender:
              </Typography>
              <Typography variant="body1">{currentUser.gender}</Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;
