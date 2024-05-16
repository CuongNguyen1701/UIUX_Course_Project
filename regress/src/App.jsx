import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { LeftBar, AIChatAssistant, ProjectList } from "./components";
import {
  LoginPage,
  HomePage,
  ProjectPage,
  SchedulePage,
  KPIPage,
  SignupPage,
  ProjectDetails,
  SettingPage,
  PersonalPage,
} from "./pages";
const App = () => {
  const [Logined, setLogin] = useState(true);
  console.log(Logined);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white font-['Roboto']">
        {Logined && <LeftBar />}
        {Logined && <AIChatAssistant />}
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
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/projects/all" element={<ProjectList />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/kpi" element={<KPIPage />} />
          <Route path="/project_detail" element={<ProjectDetails />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/for_got_password" element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
