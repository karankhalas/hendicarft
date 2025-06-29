// import React from "react";
// import { motion } from "framer-motion";
// import im1 from "../Admin/Image/im1.jpeg";
// import im2 from "../Admin/Image/im2.jpeg";
// import im3 from "../Admin/Image/im3.jpeg";

// const AboutUs = () => {
//   return (
//     <div style={{ background: "#f9f4ef", padding: "60px 0" }}>
//       <div className="container">
//         {/* Header Section */}
//         <div className="row align-items-center mb-5 bg-white rounded shadow p-4">
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <motion.img
//               src={im3}
//               alt="About Us"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="img-fluid rounded"
//               style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)" }}
//             />
//           </div>
//           <div className="col-lg-6">
//             <motion.h2
//               className="fw-bold mb-3"
//               style={{
//                 color: "#6f4e37",
//                 borderBottom: "4px solid #ffb347",
//                 display: "inline-block",
//                 paddingBottom: "8px",
//               }}
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               About Us
//             </motion.h2>
//             <motion.p
//               className="fs-5"
//               style={{ color: "#333", lineHeight: "1.7" }}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               Welcome to <strong>Jay Mataji Handicrafts</strong> — where
//               tradition meets creativity. Each of our products tells a story,
//               preserving heritage through beautifully handcrafted work by
//               skilled artisans.
//             </motion.p>
//           </div>
//         </div>

//         {/* Mission Section */}
//         <div className="row align-items-center mb-5 bg-white rounded shadow p-4">
//           <div className="col-lg-6 order-2 order-lg-1">
//             <motion.h3
//               className="fw-semibold mb-3"
//               style={{ color: "#a0522d" }}
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Our Mission
//             </motion.h3>
//             <motion.p
//               style={{ color: "#555", lineHeight: "1.6" }}
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               To empower local artisans by preserving and promoting traditional
//               crafts while ensuring sustainable practices. Every product you see
//               is crafted with passion, pride, and purpose.
//             </motion.p>
//           </div>
//           <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0 text-center">
//             <motion.img
//               src={im1}
//               alt="Our Mission"
//               className="img-fluid rounded"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.7 }}
//               style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
//             />
//           </div>
//         </div>

//         {/* Vision Section */}
//         <div className="row align-items-center bg-white rounded shadow p-4">
//           <div className="col-lg-6 mb-4 mb-lg-0 text-center">
//             <motion.img
//               src={im2}
//               alt="Our Vision"
//               className="img-fluid rounded"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.7 }}
//               style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
//             />
//           </div>
//           <div className="col-lg-6">
//             <motion.h3
//               className="fw-semibold mb-3"
//               style={{ color: "#2e8b57" }}
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Our Vision
//             </motion.h3>
//             <motion.p
//               style={{ color: "#555", lineHeight: "1.6" }}
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               We envision a world where every artisan is celebrated, and every
//               craft is valued. Our goal is to globally connect traditional art
//               with conscious customers who care.
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import { motion } from "framer-motion";
import im1 from "../Admin/Image/im1.jpeg";
import im2 from "../Admin/Image/im2.jpeg";
import im3 from "../Admin/Image/im3.jpeg";

const AboutUs = () => {
  return (
    <div style={{ background: "#f5efe7", padding: "80px 0" }}>
      <div className="container">
        {/* Step 1: Welcome Section */}
        <motion.div
          className="step-box bg-white rounded shadow p-4 mb-5 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
        >
          <h1 className="fw-bold text-dark" style={{ fontSize: "2.8rem" }}>Welcome to Jay Mataji Handicrafts</h1>
          <p className="fs-5 text-muted">Where heritage meets modern craftsmanship</p>
        </motion.div>

        {/* Step 2: About Us */}
        <motion.div
          className="step-box row align-items-center bg-white rounded shadow p-4 mb-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="col-lg-6">
            <motion.img
              src={im3}
              alt="About Us"
              className="img-fluid rounded"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{ boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold text-brown" style={{ borderBottom: "3px solid #ffb347", display: "inline-block", paddingBottom: "6px" }}>
              Step 1: About Us
            </h2>
            <p>We celebrate artistry and heritage through beautifully handcrafted products made by skilled artisans.</p>
          </div>
        </motion.div>

        {/* Step 3: Our Mission */}
        <motion.div
          className="step-box row align-items-center bg-white rounded shadow p-4 mb-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="col-lg-6 order-2 order-lg-1">
            <h3 className="fw-semibold text-dark">Step 2: Our Mission</h3>
            <p>Empowering artisans by preserving traditional crafts and ensuring sustainable practices.</p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <motion.img
              src={im1}
              alt="Our Mission"
              className="img-fluid rounded"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              style={{ boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            />
          </div>
        </motion.div>

        {/* Step 4: Our Vision */}
        <motion.div
          className="step-box row align-items-center bg-white rounded shadow p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="col-lg-6 text-center">
            <motion.img
              src={im2}
              alt="Our Vision"
              className="img-fluid rounded"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              style={{ boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-semibold text-dark">Step 3: Our Vision</h3>
            <p>Connecting artisans with a global audience that values heritage and craftsmanship.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;