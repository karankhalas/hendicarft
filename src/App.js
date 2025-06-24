// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Admin/Navbar"; // Import the header component
// import Dashboard from "./Pages/Dashboard";
// import ManageUser from "./Pages/ManageUser";
// import ManageCatalog from "./Pages/ManageCatalog";
// import CraftDetails from "./Pages/CraftDetails";
// import ManageBooking from "./Pages/ManageBooking";
// import Services from "./Pages/Services";
// import Payments from "./Pages/Payments";
// import Reporting from "./Pages/Reporting";
// import Feedback from "./Pages/Feedback";
// import Settings from "./Pages/Settings";
// import Login from "./Pages/Login";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Header Component */}
//         <Navbar />

//         {/* Define Routes */}
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/manageuser" element={<ManageUser />} />
//           <Route path="/managecatalog" element={<ManageCatalog />} />
//           <Route path="/craftdetails" element={<CraftDetails />} />
//           <Route path="/managebooking" element={<ManageBooking />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/payments" element={<Payments />} />
//           <Route path="/reporting" element={<Reporting />} />
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/settings" element={<Settings />} />
//           <Route path="/Login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react'
// import Registraion from './User/Registraion'
// import Login from './User/Login';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <Router>
//       <Routes>
// <Route path="/" element={<Registraion />} />
// <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import {Auth} from './Components/auth'

// function App() {
//   return (
//     <div>
//       <Auth/>

//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Homescren from './User/Homescren'
// import AboutUs from './User/AboutUs'
// import Footer from './User/Footer'
// import Catalog from './User/Catalog'

// function App() {
//   return (
//     <div>
//       <Homescren/>
//       {/* <Footer/> */}
//       {/* <AboutUs/> */}
//       {/* <Catalog/> */}
//     </div>
//   )
// }

// export default App

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Import your components/pages
// import Homescren from "./User/Homescren";
// import AboutUs from "./User/AboutUs";
// import Catalog from "./User/Catalog";
// import Products from "./User/Products";
// import ContactUs from "./User/ContactUS";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homescren />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/catalog" element={<Catalog />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contact" element={<ContactUs />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import AppUSerRoutes from "./AppUserRouting"

// const App = () => (
//   <Router>
//     <AppUSerRoutes />
//   </Router>
// );

// export default App;

import React from "react";
import Homescren from "./User/Homescren";
import Mainscreen from "./User/Mainscreen";
import AboutUs from "./User/AboutUs";
import Catalog from "./User/Catalog";
import Products from "./User/Products";
import ContactUS from "./User/ContactUS";
import Wishlist from "./User/Wishlist";
import Cart from "./User/Cart";
import Checkout from "./User/Checkout"
import Payment from "./User/Payment"
import Navbar from "../src/Admin/Navbar";
import Footer from "./User/Footer";
import Pp from "./User/Pp";
import Termscontion from "./User/Termscondition";
import Orderandreturn from "./User/Orderandreturn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Purse from "../src/User/Purse";
import Dandiya from "../src/User/Dandiya";
import Toran from "../src/User/Toran";
import Jewellery from "../src/User/Jewellery";
import Registraion from './User/Registraion'
import Login from './User/Login';
import Logout from './User/Logout'
import Placeorder from './User/Placeorder'
import Myprofile from './User/Myprofile'
import { WishlistProvider } from "./Wishcontext";
import { CartProvider } from "./Cartcontext";
import { AuthProvider } from "../src/User/Authcontext";
import TermsConditions from "./User/Termscondition";

function App() {
  return (
    <div>
        <AuthProvider>

       <CartProvider>
      <WishlistProvider>
      <Router>
        <Homescren />
        <Routes>
          <Route path="/" element={<Mainscreen />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/wishlist" element={<Wishlist />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="/checkout"element={<Checkout />}/>
          <Route path="/placeorder" element={<Placeorder />}/>
          <Route path="/payment" element={<Payment />}/>
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/Purse" element={<Purse />} />
          <Route path="/Dandiya" element={<Dandiya />} />
          <Route path="/Toran" element={<Toran />} />
          <Route path="/Jewellery" element={<Jewellery />} />
          <Route path="/registration" element={<Registraion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pp" element={<Pp />} />
        <Route path="/termscondition" element={<TermsConditions />} />
        <Route path="/orderandreturn" element={<Orderandreturn />} />
        
        </Routes>
        <Footer />
      </Router>
      </WishlistProvider>
      </CartProvider>
      </AuthProvider>

    </div>
  );
}

export default App;



// import React, { useEffect, useState } from "react";
// import { db } from "./Confing/firebase";
// import { getDocs, collection, addDoc } from "firebase/firestore";

// function App() {
//   const [movielist, setmovielist] = useState([]);

//   const [newmoviestitle, setnewmovietitle] = useState("");
//   const [newrleasedate, setnewrleasedate] = useState(0);
//   const [isnewmovieoscar, setisnewmovieoscar] = useState(false);

//   const moviescollectionref = collection(db, "movies");

//   const getmovielist = async () => {
//     try {
//       const data = await getDocs(moviescollectionref);
//       const filterdata = data.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setmovielist(filterdata);
//       console.log(filterdata);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getmovielist();
//   }, []);

//   const onsubmitmovie = async () => {
//     try {
//       await addDoc(moviescollectionref, {
//         title: newmoviestitle,
//         releaseDate: newrleasedate,
//         receivedAnOscar: isnewmovieoscar,
//       });
//       setnewmovietitle("");
//       setnewrleasedate(0);
//       setisnewmovieoscar(false);
//       getmovielist(); // ✅ Refresh the list
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <div style={{ margin: "25px" }}>
//         <input
//           placeholder="movie title.."
//           value={newmoviestitle}
//           onChange={(e) => setnewmovietitle(e.target.value)}
//         />
//         <input
//           placeholder="Release Date.."
//           type="number"
//           value={newrleasedate}
//           onChange={(e) => setnewrleasedate(Number(e.target.value))}
//         />
//         <input
//           type="checkbox"
//           checked={isnewmovieoscar}
//           onChange={(e) => setisnewmovieoscar(e.target.checked)}
//         />
//         <label>Received An Oscar</label>
//         <button onClick={onsubmitmovie}>Submit</button>
//       </div>

//       {movielist.map((movie) => (
//         <div key={movie.id}>
//           <h1>{movie.title}</h1>
//           {/* <h2>{movie.receivedAnOscar ? "Oscar Winner" : "No Oscar"}</h2> */}
//           <h3>Release Date: {movie.releaseDate}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
