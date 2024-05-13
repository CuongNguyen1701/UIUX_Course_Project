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
          <Route path="/signup" element={<></>} />
          <Route path="/user/auth/:id" element={<></>} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/predictions" element={<PredictionsPage />} />
          <Route path="/personal" element={<></>} />
          <Route path="/settings" element={<></>} />
          <Route path="/for_got_password" element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
