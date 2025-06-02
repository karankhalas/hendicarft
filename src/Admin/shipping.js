import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LockIcon from '@mui/icons-material/Lock';
import ReplayIcon from '@mui/icons-material/Replay';

const Features = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: '40px 0', backgroundColor: '#f9f9f9', height: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center' }}>
        Our Services
      </Typography>
      <Grid container spacing={24}>
        {/* Free Shipping */}
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <LocalShippingIcon sx={{ fontSize: 60, color: '#ff6666' }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}>
              Free Shipping
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>Free shipping worldwide</Typography>
          </Box>
        </Grid>

        {/* Support 24/7 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <SupportAgentIcon sx={{ fontSize: 60, color: '#ff6666' }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}>
              Support 24/7
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>Contact us 24 hours a day</Typography>
          </Box>
        </Grid>

        {/* Secure Payments */}
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <LockIcon sx={{ fontSize: 60, color: '#ff6666' }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}>
              Secure Payments
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>100% payment protection</Typography>
          </Box>
        </Grid>

        {/* Easy Return */}
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <ReplayIcon sx={{ fontSize: 60, color: '#ff6666' }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}>
              Easy Return
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>Simple returns policy</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
