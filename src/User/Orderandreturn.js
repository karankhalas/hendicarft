// import React from "react";
// import { Container, Typography, Stepper, Step, StepLabel, Card, CardContent, Grid, Box } from "@mui/material";
// import { ShoppingCart, LocalShipping, AssignmentReturn, SupportAgent } from "@mui/icons-material";

// const orderSteps = ["Order Placed", "Processing", "Shipped", "Delivered"];
// const returnSections = [
//   { title: "Return Eligibility", content: "Items must be returned within 30 days in original condition.", icon: AssignmentReturn },
//   { title: "Refund Process", content: "Refunds are processed within 5-7 business days after approval.", icon: SupportAgent },
//   { title: "Exchange Policy", content: "Exchanges are available for defective or incorrect items.", icon: LocalShipping },
// ];

// const OrderReturnPage = () => {
//   return (
//     <Container sx={{ padding: 4 }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>Order Tracking</Typography>
//       <Stepper activeStep={2} alternativeLabel>
//         {orderSteps.map((step, index) => (
//           <Step key={index}>
//             <StepLabel>{step}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       <Typography variant="h4" fontWeight="bold" gutterBottom mt={4}>Return & Refund Policy</Typography>
//       <Grid container spacing={3}>
//         {returnSections.map((section, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ padding: 2, boxShadow: 3 }}>
//               <CardContent>
//                 <Box display="flex" alignItems="center" gap={2}>
//                   {React.createElement(section.icon)}
//                   <Typography variant="h6" fontWeight="bold">{section.title}</Typography>
//                 </Box>
//                 <Typography variant="body2" mt={1}>{section.content}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default OrderReturnPage;
// -------------------*********************************************---------------------------------------------------------------------

// import React from "react";
// import { Container, Typography, Stepper, Step, StepLabel, Card, CardContent, Grid, Box } from "@mui/material";
// import { ShoppingCart, LocalShipping, AssignmentReturn, SupportAgent } from "@mui/icons-material";

// const orderSteps = ["Order Placed", "Processing", "Shipped", "Delivered"];
// const returnSections = [
//   { title: "Return Eligibility", content: "Items must be returned within 30 days in original condition.", icon: <AssignmentReturn /> },
//   { title: "Refund Process", content: "Refunds are processed within 5-7 business days after approval.", icon: <SupportAgent /> },
//   { title: "Exchange Policy", content: "Exchanges are available for defective or incorrect items.", icon: <LocalShipping /> },
// ];

// const OrderReturnPage = () => {
//   return (
//     <Container sx={{ padding: 4 }}>
//       {/* Order Tracking Section */}
//       <Typography variant="h4" fontWeight="bold" gutterBottom>Order Tracking</Typography>
//       <Stepper activeStep={2} alternativeLabel>
//         {orderSteps.map((step, index) => (
//           <Step key={index}>
//             <StepLabel>{step}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {/* Return Policy Section */}
//       <Typography variant="h4" fontWeight="bold" gutterBottom mt={4}>Return & Refund Policy</Typography>
//       <Grid container spacing={3}>
//         {returnSections.map((section, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ padding: 2, boxShadow: 3 }}>
//               <CardContent>
//                 <Box display="flex" alignItems="center" gap={2}>
//                   {section.icon}
//                   <Typography variant="h6" fontWeight="bold">{section.title}</Typography>
//                 </Box>
//                 <Typography variant="body2" mt={1}>{section.content}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default OrderReturnPage;
// =======================================================================================================

import React from "react";
import { Container, Typography, Card, CardContent, Grid, Box, Button } from "@mui/material";
import { AssignmentReturn, SupportAgent, LocalShipping, HelpOutline } from "@mui/icons-material";

const returnSections = [
  { title: "Return Eligibility", content: "Items must be returned within 30 days in original condition.", icon: AssignmentReturn },
  { title: "Refund Process", content: "Refunds are processed within 5-7 business days after approval.", icon: SupportAgent },
  { title: "Exchange Policy", content: "Exchanges are available for defective or incorrect items.", icon: LocalShipping },
];

const ReturnRefundPage = () => {
  return (
    <Container sx={{ padding: 4 }}>
      {/* Return Policy Section */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>Return & Refund Center</Typography>
      <Typography variant="body1" color="textSecondary">
        Need to return an item? Follow our simple process below.
      </Typography>

      <Grid container spacing={3} mt={2}>
        {returnSections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ padding: 2, boxShadow: 3, borderRadius: 3, background: "linear-gradient(135deg, #f3f3f3, #ffffff)" }}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2}>
                  {React.createElement(section.icon, { sx: { fontSize: 40, color: "#1976d2" } })}
                  <Typography variant="h6" fontWeight="bold">{section.title}</Typography>
                </Box>
                <Typography variant="body2" mt={1}>{section.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Refund Status Checker
      <Box mt={4} textAlign="center">
        <Typography variant="h5" fontWeight="bold">Check Your Refund Status</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Track Refund
        </Button>
      </Box> */}

      {/* Live Support & FAQs */}
      <Box mt={4} textAlign="center">
        <Typography variant="h5" fontWeight="bold">Need Help?</Typography>
        <Button variant="outlined" startIcon={<HelpOutline />} sx={{ mt: 2 }}>
          Visit FAQs
        </Button>
      </Box>
    </Container>
  );
};

export default ReturnRefundPage;
