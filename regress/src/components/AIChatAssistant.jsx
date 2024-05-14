import { useState } from "react";
import Draggable from "react-draggable";
import logo from "../assets/react.svg";
function AIChatAssistant() {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <Draggable bounds="body" defaultPosition={{ x: 100, y: 0 }}>
      <div className="fixed z-10 bottom-10 right-40">
        <span className="absolute top-0 left-0 z-20 w-full h-full select-none hover:cursor-pointer"></span>
        <img
          src={logo}
          alt="Regress Logo"
          className="w-20 h-20 p-2 border-2 rounded-full bg-primary-100 border-primary border-5"
        />
      </div>
    </Draggable>
  );
}

export default AIChatAssistant;
