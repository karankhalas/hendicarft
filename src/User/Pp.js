import React from "react";

import { styled } from "@mui/material/styles";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RootContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const Heading = styled(Typography)({
  fontWeight: "bold",
});

const PrivacyPolicy = () => {
  const sections = [
    { title: "Introduction", content: "Welcome to Hedicraft App, where we value your privacy." },
    { title: "Information We Collect", content: "We collect your name, email, shipping details, and payment information." },
    { title: "How We Use Your Information", content: "We use your data to process transactions and improve services." },
    { title: "Data Sharing & Security", content: "We do not sell your data. Necessary details may be shared with partners." },
    { title: "User Rights", content: "You have the right to access, update, and request deletion of your data." },
    { title: "Contact Us", content: "For privacy concerns, contact us at support@hedicraftapp.com." },
  ];

  return (
    <RootContainer>
      <Heading variant="h4" gutterBottom>Privacy Policy</Heading>
      {sections.map((section, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Heading>{section.title}</Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{section.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </RootContainer>
  );
};

export default PrivacyPolicy;