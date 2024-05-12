import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Navbar />
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<></>} />
          <Route path="/user/auth/:id" element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
