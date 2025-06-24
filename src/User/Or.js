import React from "react";
import { Container, Typography, Stepper, Step, StepLabel, Card, CardContent, Grid, Box } from "@mui/material";
import { ShoppingCart, LocalShipping, AssignmentReturn, SupportAgent } from "@mui/icons-material";

const orderSteps = ["Order Placed", "Processing", "Shipped", "Delivered"];
const returnSections = [
  { title: "Return Eligibility", content: "Items must be returned within 30 days in original condition.", icon: <AssignmentReturn /> },
  { title: "Refund Process", content: "Refunds are processed within 5-7 business days after approval.", icon: <SupportAgent /> },
  { title: "Exchange Policy", content: "Exchanges are available for defective or incorrect items.", icon: <LocalShipping /> },
];

const OrderReturnPage = () => {
  return (
    <Container sx={{ padding: 4 }}>
      {/* Order Tracking Section */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>Order Tracking</Typography>
      <Stepper activeStep={2} alternativeLabel>
        {orderSteps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Return Policy Section */}
      <Typography variant="h4" fontWeight="bold" gutterBottom mt={4}>Return & Refund Policy</Typography>
      <Grid container spacing={3}>
        {returnSections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ padding: 2, boxShadow: 3 }}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2}>
                  {section.icon}
                  <Typography variant="h6" fontWeight="bold">{section.title}</Typography>
                </Box>
                <Typography variant="body2" mt={1}>{section.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OrderReturnPage;
