import React from "react";
import { LeftBar, ScheduleBoard, Title, LineChart } from "../components";
const Notification = ({ title, content, time, unread }) => {
  return (
    <div className="flex flex-col w-full h-20 p-2 border-2 border-gray-500 rounded-xl">
      {unread && (
        <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-primary"></div>
      )}
      <div className="flex flex-row justify-between">
        <div className="text-lg font-bold text-black">{title}</div>
        <div className="text-sm text-black">{time}</div>
      </div>
      <div className="text-black text-md">{content}</div>
    </div>
  );
};
const NotificationBar = () => {
  return (
    <div className="top-0 right-0 flex flex-col w-1/6 gap-5 px-10 py-8 mt-10 mr-10 bg-white border-2 border-gray-200 rounded-xl h-3/4">
      <div className="text-2xl font-bold text-left text-black">Thông báo</div>
      <div className="flex flex-row justify-start gap-10 text-center text-md">
        <div className="px-3 py-1 text-white rounded-full bg-primary">
          Tất cả
        </div>
        <div className="px-3 py-1 text-black bg-white border-2 border-black rounded-full">
          Chưa đọc
        </div>
      </div>

      <Notification
        title="Thông báo 1"
        content="Nội dung thông báo 1"
        time="12:00"
        unread={true}
      />
      <Notification
        title="Thông báo 2"
        content="Nội dung thông báo 2"
        time="12:00"
        unread={false}
      />
      <Notification
        title="Thông báo 3"
        content="Nội dung thông báo 3"
        time="12:00"
        unread={true}
      />
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="relative flex flex-row items-center justify-start w-screen h-screen gap-6 bg-white">
      <Title title="Trang chủ" />
      <div className="flex flex-col justify-start pt-10 w-1/2 pl-14 ml-80">
        <LineChart width={"100%"} height={"100%"} />
        <div className="flex flex-row justify-between">
          <ScheduleBoard />
          <ScheduleBoard />
        </div>
      </div>
      <NotificationBar />
    </div>
  );
};

export default HomePage;
