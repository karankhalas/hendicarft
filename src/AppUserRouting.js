import React from "react";
import { Routes, Route } from "react-router-dom";

import Homescren from "./User/Homescren";
import AboutUs from "./User/AboutUs";
import Catalog from "./User/Catalog";
import Products from "./User/Products";
import ContactUS from "./User/ContactUS";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Homescren />}>
      <Route index element={<Homescren />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<ContactUS />} />
    </Route>
  </Routes>
);

export default AppRoutes;
