import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { StitchDesign } from "./screens/StitchDesign/StitchDesign";
import { MenuPage } from "./screens/MenuPage";
import { AboutPage } from "./screens/AboutPage";
import { GalleryPage } from "./screens/GalleryPage";
import { BookingPage } from "./screens/BookingPage";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StitchDesign />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};