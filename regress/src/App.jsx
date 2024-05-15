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
  SignupPage,
} from "./pages";
const App = () => {
  const [Logined, setLogin] = useState(false);
  console.log(Logined);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        {Logined ? <div></div> : <LeftBar />}
        {!Logined && <AIChatAssistant />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<LoginPage setLoginLogout={setLogin} />}
          />
          <Route
            path="/signup"
            element={<SignupPage setLoginLogout={setLogin} />}
          />
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
