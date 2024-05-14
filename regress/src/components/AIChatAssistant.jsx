import { useState } from "react";
import Draggable from "react-draggable";
import logo from "../assets/react.svg";
const ChatScreen = () => {
  return (
    <div className="flex flex-col-reverse px-10 pb-5 mt-10 text-black rounded-lg rounded-tr-none pt-7 bg-primary-200 max-h-40 min-h-20 max-w-100 w-fit">
      <div className="flex flex-row">
        <input
          className="px-5 py-3 bg-primary-100 rounded-3xl"
          placeholder="Enter your message here..."
        />
      </div>
    </div>
  );
};
const AIChatAssistant = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const toggleChat = (e) => {
    setChatOpen(!chatOpen);
  };
  return (
    <Draggable bounds="body" defaultPosition={{ x: 100, y: 0 }}>
      <div className="fixed z-10 flex flex-row m-10 bottom-10 right-40">
        {chatOpen && <ChatScreen />}
        <div className="select-none">
          <span
            className="absolute top-0 right-0 z-20 w-20 h-20 hover:cursor-pointer"
            onClick={toggleChat}
          ></span>
          <img
            src={logo}
            alt="Regress Logo"
            className="w-20 h-20 p-2 border-2 rounded-full bg-primary-100 border-primary border-5"
          />
        </div>
      </div>
    </Draggable>
  );
};

export default AIChatAssistant;
