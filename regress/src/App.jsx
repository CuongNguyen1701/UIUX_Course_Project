import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { LeftBar, AIChatAssistant } from "./components";
import {
  LoginPage,
  HomePage,
  ProjectPage,
  SchedulePage,
  PredictionsPage,
} from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <LeftBar />
        <AIChatAssistant />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
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
