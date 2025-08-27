import React from "react";
import Navbar from "../layouts/Navbar";
import IncredibleIndiaHomepage from "../pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Redirect from root "/" to "/Home" */}
          <Route path="/" element={<Navigate to="/Home" replace />} />

          {/* Your home page route */}
          <Route path="/Home" element={<IncredibleIndiaHomepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
