import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { LeftBar } from "./components";
import { HomePage, ProjectPage, SchedulePage, PredictionsPage } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <LeftBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<></>} />
          <Route path="/user/auth/:id" element={<></>} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/predictions" element={<PredictionsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
