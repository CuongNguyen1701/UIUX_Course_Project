import { useState, useRef } from "react";
import Draggable from "react-draggable";
import agentLogo from "../assets/agent.png";
import sendLogo from "../assets/send-icon.svg";
import avatar from "../assets/avatar.png";
const ChatBubble = ({ text, isUser }) => {
  return (
    <div
      className={`w-full h-full flex ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <img
        src={isUser ? avatar : agentLogo}
        alt="Avatar"
        className="w-16 h-16 rounded-full"
      />
      <div
        className={`flex flex-row gap-2 p-5 bg-primary text-white rounded-3xl w-1/2 h-fit mt-8 ${
          isUser ? "rounded-tr-none" : "rounded-tl-none"
        } `}
      >
        {text}
      </div>
    </div>
  );
};
const ChatScreen = ({ chatLog, insertChat }) => {
  const bottomRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.message.value) return;
    await insertChat(e.target.message.value, true);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
    e.target.message.value = "";
    // set a timeout to simulate the AI response
    setTimeout(async () => {
      await insertChat("I am a bot", false);
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }, 2000);
  };
  return (
    <div className="px-10 pb-5 mt-10 text-black rounded-lg rounded-tr-none pt-7 bg-primary-200 h-fit max-w-100 w-fit">
      <div className="flex flex-col-reverse gap-5">
        <form
          className="flex flex-row justify-between gap-1"
          onSubmit={handleSubmit}
        >
          <input
            className="px-5 py-3 bg-primary-100 rounded-3xl"
            placeholder="Enter your message here..."
            name="message"
          />
          <button
            type="submit"
            className="w-16 h-16 p-0 m-0 bg-transparent border-2 rounded-2xl bg-secondary-100 border-secondary hover:border-primary hover:bg-secondary-200 "
          >
            <img
              src={sendLogo}
              alt="Send"
              className="w-16 h-16 p-2 fill-primary hover:cursor-pointer"
            />
          </button>
        </form>
        <div className="flex flex-col gap-2 overflow-y-scroll max-h-96">
          {chatLog.map((chat) => (
            <ChatBubble text={chat.text} isUser={chat.isUser} key={chat.key} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};
const AIChatAssistant = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const toggleChat = (e) => {
    e.preventDefault();
    setChatOpen(!chatOpen);
  };
  const [chatLog, setChatLog] = useState([]);
  const insertChat = (message, isUser) => {
    setChatLog((prev) => [
      ...prev,
      { text: message, isUser: isUser, key: prev.length },
    ]);
  };
  return (
    <Draggable bounds="body" defaultPosition={{ x: 100, y: 0 }}>
      <div className="fixed z-10 flex flex-row m-10 bottom-10 right-40 cursor-none">
        {chatOpen && <ChatScreen chatLog={chatLog} insertChat={insertChat} />}
        <div className="select-none">
          <span
            className="absolute top-0 right-0 z-20 w-20 h-20 hover:cursor-pointer"
            onClick={toggleChat}
          ></span>
          <img
            src={agentLogo}
            alt="Regress Logo"
            className="w-20 h-20 p-2 border-2 rounded-full bg-primary-100 border-primary border-5"
          />
        </div>
      </div>
    </Draggable>
  );
};

export default AIChatAssistant;
