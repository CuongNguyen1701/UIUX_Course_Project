import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { LeftBar } from "./components";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Navbar />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<></>} />
          <Route path="/user/auth/:id" element={<></>} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/predictions" element={<PredictionsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
