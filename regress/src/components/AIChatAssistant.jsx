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
        className="w-12 h-12 rounded-full"
      />
      <div
        className={`flex flex-col text-left gap-2 p-3 bg-primary rounded-3xl w-2/3 h-fit mt-8 ${
          isUser
            ? "rounded-tr-none bg-primary text-white"
            : "rounded-tl-none bg-white-100 text-black"
        } `}
      >
        {text.split("\n").map((line, index) => (
          <p key={index} className="text-sm break-normal">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
const ChatSuggestionButton = ({ text, onClick }) => {
  return (
    <button
      className="px-3 py-2 text-xs break-normal bg-primary-100 border-primary rounded-3xl hover:bg-secondary-100"
      onClick={onClick}
    >
      {text}
    </button>
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
      await insertChat("Hello, how can I help you?", false);
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }, 2000);
  };
  const defaultHandlerGenerator = (message, response) => {
    const handleChat = async (e) => {
      e.preventDefault();
      await insertChat(message, true);
      await bottomRef.current.scrollIntoView({ behavior: "smooth" });
      await insertChat(response, false);
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return handleChat;
  };
  const chatResponsePairs = [
    {
      message: "Tôi nên làm gì hôm nay?",
      response:
        "Hôm nay bạn nên hoàn thành sớm dự án UIUX và biểu đồ lớp cho môn ITSS",
    },
    {
      message: "Cho tôi xem tổng kết tuần trước?",
      response:
        "Trong tuần trước, bạn đã: \n- Hoàn thành 7 đầu việc, KPI trung bình đạt 80% \n- Đã có thêm 1 dự án mới \nHãy tiếp tục cố gắng nhé!",
    },
    {
      message: "Sắp tới có những deadlines nào?",
      response:
        "Tuần sau bạn có những deadlines sau (sắp xếp theo độ ưu tiên từ cao đến thấp):\n- Hoàn thành mẫu thử độ tin cậy cao cho môn UIUX \n- Hoàn thành bài tập lớn cho môn ITSS \n- Xây dựng mô hình AI cho môn Học máy \n",
    },
  ];
  return (
    <div className="px-10 pb-5 mt-10 text-black rounded-lg rounded-tr-none pt-7 bg-primary-200 max-w-[32rem] w-fit text-sm shadow-lg">
      <div className="flex flex-col-reverse gap-5">
        <form
          className="flex flex-row justify-between gap-1"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full px-3 py-1 bg-primary-100 rounded-3xl"
            placeholder="Enter your message here..."
            name="message"
          />
          <button
            type="submit"
            className="p-0 m-0 bg-transparent border-2 rounded-full w-fit h-fit bg-secondary-100 border-secondary hover:border-primary hover:bg-secondary-200 "
          >
            <img
              src={sendLogo}
              alt="Send"
              className="w-8 h-8 p-2 fill-primary hover:cursor-pointer"
            />
          </button>
        </form>
        <div className="flex flex-row flex-wrap items-center w-full gap-2">
          {chatResponsePairs.map((pair) => (
            <ChatSuggestionButton
              text={pair.message}
              onClick={defaultHandlerGenerator(pair.message, pair.response)}
              key={pair.message}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar max-h-96">
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
      <div className="fixed z-50 flex flex-row m-10 bottom-10 right-40">
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
