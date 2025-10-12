import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Apps from "./apps.tsx"; // main app layout
import Dashboard from "./pages/StudentDashboard.tsx"; // student dashboard
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* login page */}
        <Route path="/" element={<Dashboard />} /> {/* student dashboard */}
        <Route path="/apps" element={<Apps />} /> {/* main app */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
