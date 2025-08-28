import React from "react";
import Navbar from "../layouts/Navbar";
import Homepage from "../pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Introduction from "../pages/Introduction";
import MovementPage from "../pages/MovementPage";
import OurFounder from "../pages/OurFounder";
import Philosophy from "../pages/Philosophy";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Redirect from root "/" to "/Home" */}
          <Route path="/" element={<Navigate to="/Home" replace />} />

          {/* Your home page route */}
          <Route path="/Home" element={<Homepage />} />
          <Route path="/about/introduction" element={<Introduction />} />
          <Route path="/about/movement" element={<MovementPage />} />
          <Route path="/about/our-founder" element={<OurFounder />} />
          <Route path="/about/philosophy" element={<Philosophy />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
