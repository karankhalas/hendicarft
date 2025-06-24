// import React from "react";
// import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const TermsConditions = () => {
//   const sections = [
//     { 
//       title: "Introduction", 
//       content: "Welcome to Hedicraft App. By using our services, you agree to comply with our terms and conditions." 
//     },
//     { 
//       title: "User Eligibility", 
//       content: "Users must be at least 18 years old or have parental consent to use our platform." 
//     },
//     { 
//       title: "Account Responsibility", 
//       content: "You are responsible for maintaining the confidentiality of your account and password." 
//     },
//     { 
//       title: "Purchases & Payments", 
//       content: "All transactions are securely processed. Refunds are subject to our refund policy." 
//     },
//     { 
//       title: "Intellectual Property", 
//       content: "All content, including images and designs, is owned by Hedicraft or its respective creators." 
//     },
//     { 
//       title: "Limitations of Liability", 
//       content: "Hedicraft is not liable for any direct or indirect damages from the use of our services." 
//     },
//     { 
//       title: "Governing Law", 
//       content: "These terms are governed by the laws of [Your Country]. Disputes must be resolved through arbitration." 
//     },
//     { 
//       title: "Contact Us", 
//       content: (
//         <>
//           For any legal inquiries, reach out to us at  
//           <a href="mailto:support@hedicraftapp.com"> support@hedicraftapp.com</a>. <br/>
//           Need **live support**? Visit  
//           <a href="https://hedicraftapp.com/support" target="_blank" rel="noopener noreferrer">
//             Live Support
//           </a>.
//         </>
//       )
//     },
//   ];

//   return (
//     <Container sx={{ padding: 4 }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>Terms and Conditions</Typography>
//       {sections.map((section, index) => (
//         <Accordion key={index}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography fontWeight="bold">{section.title}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>{section.content}</Typography>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </Container>
//   );
// };

// export default TermsConditions;
// ==============================================================================================================

import React from "react";
import { Container, Typography, Card, CardContent, Grid, Box } from "@mui/material";
import { Security, AccountCircle, ShoppingCart, Gavel, ContactSupport } from "@mui/icons-material";

const sections = [
  { title: "Introduction", content: "Welcome to Hedicraft App. By using our services, you agree to comply with our terms.", icon: <Gavel /> },
  { title: "User Eligibility", content: "Users must be at least 18 years old or have parental consent.", icon: <AccountCircle /> },
  { title: "Purchases & Payments", content: "All transactions are securely processed. Refunds follow our policy.", icon: <ShoppingCart /> },
  { title: "Security & Privacy", content: "We prioritize data security and user privacy.", icon: <Security /> },
  { title: "Contact Us", content: "For inquiries, email us at support@hedicraftapp.com.", icon: <ContactSupport /> },
];

const TermsConditions = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>Terms and Conditions</Typography>
      <Grid container spacing={3}>
        {sections.map((section, index) => (
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

export default TermsConditions;
