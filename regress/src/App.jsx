import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { LeftBar } from "./components";
import { LoginPage, HomePage, ProjectPage, SchedulePage, PredictionsPage } from "./pages";

const App = () => {
  const [LoginLogout, setLoginLogout] = useState(false);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-secondary-100">
        {LoginLogout ? null : <LeftBar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setLoginLogout={setLoginLogout} />} />
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
