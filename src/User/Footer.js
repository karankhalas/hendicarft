// import React from "react";
// import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";

// const Footer = () => {
//   return (
//     <>
//       {/* Top Footer Section */}
//       <Box
//         sx={{
//           backgroundColor: "#d0ebff",
//           color: "#333",
//           py: 5,
//           px: { xs: 2, sm: 5 },
//         }}
//       >
//         <Grid container spacing={4} justifyContent="space-between">
//           {/* Contact Info */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
//               Contact Information
//             </Typography>
//             <Typography>Phone: (+91) 9106089227</Typography>
//             <Typography>Email: karankhalas@.com</Typography>
//             <Typography>Address: Mukhwas gali, Manekchok, Ahmedabad</Typography>
//           </Grid>

//           {/* Info Links */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
//               Information
//             </Typography>
//             <Box>
//               <Link href="#" underline="hover" color="inherit" display="block">
//                 About Us
//               </Link>
              
//               <Link
//                 to="/contactus"
//                 style={{
//                   color: "inherit",
//                   textDecoration: "underline",
//                   display: "block",
//                 }}
//               >
//                 Contact Us
//               </Link>
//               <Link href="#" underline="hover" color="inherit" display="block">
//                 Privacy Policy
//               </Link>
//               <Link href="#" underline="hover" color="inherit" display="block">
//                 Terms & Conditions
//               </Link>
//               <Link href="#" underline="hover" color="inherit" display="block">
//                 Orders and Returns
//               </Link>
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
//               Customer Care
//             </Typography>
//             <Box>
//               <Link
//                 href="/login"
//                 underline="hover"
//                 color="inherit"
//                 display="block"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/Registration"
//                 underline="hover"
//                 color="inherit"
//                 display="block"
//               >
//                 Registraion
//               </Link>
//               {/* <Link href="#" underline="hover" color="inherit" display="block">Wishlist</Link> */}
//               {/* <Link href="#" underline="hover" color="inherit" display="block">Terms & Conditions</Link>
//               <Link href="#" underline="hover" color="inherit" display="block">Orders and Returns</Link> */}
//             </Box>
//           </Grid>

//           {/* Newsletter */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
//               Newsletter
//             </Typography>
//             <Typography sx={{ mb: 1 }}>
//               Sign up for our mailing list to get the latest updates & offers.
//             </Typography>
//             <TextField
//               variant="outlined"
//               placeholder="Enter your email"
//               size="small"
//               sx={{
//                 backgroundColor: "#fff",
//                 borderRadius: "5px",
//                 width: "100%",
//                 mb: 1,
//               }}
//             />
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#ff6666",
//                 color: "#fff",
//                 ":hover": { backgroundColor: "#e65c5c" },
//                 width: "100%",
//               }}
//             >
//               Subscribe Now
//             </Button>
//           </Grid>
//         </Grid>
//         <Box
//           sx={{
//             // backgroundColor: "#d6eadf",
//             // borderTop: "1px solid #444",
//             py: 2,
//             // textAlign: "center",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             // color: "#00202e",
//           }}
//         >
//           <Typography variant="body2">
//             ©2025 Handicrafts. Designed by KARAN
//           </Typography>
//           <Typography variant="body2" sx={{ mt: 1 }}>
//             We accept payment via Paytm,GPay, and UPI.
//           </Typography>
//         </Box>
//       </Box>

//       {/* Bottom Footer Section */}
//       {/* <Box
//         sx={{
//           backgroundColor: "#d6eadf",
//           borderTop: "1px solid #444",
//           py: 2,
//           textAlign: "center",
//           color: "#00202e",
//         }}
//       >
//         <Typography variant="body2">
//           ©2025 Handicrafts. Designed by KARAN
//         </Typography>
//         <Typography variant="body2" sx={{ mt: 1 }}>
//           We accept payment via Paytm,GPay, and UPI.
//         </Typography>
//       </Box> */}
//     </>
//   );
// };

// export default Footer;
// ======================================================================================================================


import React from "react";
import { Box, Grid, Typography, TextField, Button, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // ✅ Import React Router's Link

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#d0ebff",
          color: "#333",
          py: 5,
          px: { xs: 2, sm: 5 },
        }}
      >
        <Grid container spacing={4} justifyContent="space-between">
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact Information
            </Typography>
            <Typography>Phone: (+91) 9106089227</Typography>
            <Typography>Email: karankhalas@.com</Typography>
            <Typography>Address: Mukhwas gali, Manekchok, Ahmedabad</Typography>
          </Grid>

          {/* Info Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Information
            </Typography>
            <Box>
              <MuiLink component={RouterLink} to="/aboutus" underline="hover" color="inherit" display="block">
                About Us
              </MuiLink>
              <MuiLink component={RouterLink} to="/contactus" underline="hover" color="inherit" display="block">
                Contact Us
              </MuiLink>
              <MuiLink component={RouterLink} to="/pp" underline="hover" color="inherit" display="block">
                Privacy Policy
              </MuiLink>
              <MuiLink component={RouterLink} to="/termscondition" underline="hover" color="inherit" display="block">
                Terms & Conditions
              </MuiLink>
              <MuiLink component={RouterLink} to="/orderandreturn" underline="hover" color="inherit" display="block">
                Orders and Returns
              </MuiLink>
            </Box>
          </Grid>

          {/* Customer Care */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Customer Care
            </Typography>
            <Box>
              <MuiLink component={RouterLink} to="/login" underline="hover" color="inherit" display="block">
                Login
              </MuiLink>
              <MuiLink component={RouterLink} to="/registration" underline="hover" color="inherit" display="block">
                Registration
              </MuiLink>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Newsletter
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Sign up for our mailing list to get the latest updates & offers.
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                width: "100%",
                mb: 1,
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6666",
                color: "#fff",
                ":hover": { backgroundColor: "#e65c5c" },
                width: "100%",
              }}
            >
              Subscribe Now
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            py: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2">
            ©2025 Handicrafts. Designed by KARAN
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            We accept payment via Paytm, GPay, and UPI,Cash On Delivry.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
