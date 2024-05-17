import React from "react";
import { LeftBar, ScheduleBoard, Title, LineChart, DonutChart } from "../components";
const Notification = ({ title, content, time, unread }) => {
  return (
    <div className="flex flex-col w-full h-20 p-2 border-2 border-gray-500 rounded-xl">
      <div className="flex flex-row justify-between">
        {
          unread && null
          // <div className="relative top-0 right-0 p-3 rounded-full bg-primary"></div>
        }
        <div className="text-lg font-bold text-black">{title}</div>
        <div className="text-sm text-black">{time}</div>
      </div>
      <div className="text-black text-md">{content}</div>
    </div>
  );
};
const NotificationBar = () => {
  return (
    <div className="top-0 right-0 flex flex-col w-1/5 gap-5 px-10 py-8 mt-4 mr-10 bg-white border-2 border-gray-200 rounded-xl h-3/4">
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
        title="Chuẩn bị đến"
        content="Trình bày vòng 2 UIUX"
        time="12:10"
        unread={true}
      />
      <Notification
        title="Chuẩn bị đến"
        content="Thi giữa kỳ Giải tích 3"
        time="23:59"
        unread={false}
      />
      <Notification
        title=" Đã quá hạn"
        content="Thi cuối kì ITSS"
        time="1:00"
        unread={true}
      />
    </div>
  );
};

const HomePage = () => {
  const data = {
    labels: ['March', 'April'],
    datasets: [
      {
        label: 'Giảng dạy',
        data: [3, 5],
        backgroundColor: '#194DD3',
        bordercolor: 'black',
        borderwidth: 1,
      },
      {
        label: 'Nghiên cứu',
        data: [7, 5],
        backgroundColor: '#B3ACFB',
        bordercolor: 'black',
        borderwidth: 1,
      },
      {
        label: 'Phục vụ',
        data: [1, 2],
        backgroundColor: 'black',
        bordercolor: 'black',
        borderwidth: 1,
      },
    ]
  };
  const allData = data.datasets.flatMap(dataset => dataset.data);
  const maxDataValue = Math.max(...allData);
  const maxY = Math.ceil(maxDataValue / 10) * 10;
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: maxY,
      },
    },
  };
  return (
    <div className="relative flex flex-row items-center justify-start w-screen h-screen gap-6 bg-white">
      <Title title="Trang chủ" />
      <div className="flex flex-col justify-start w-1/2 pt-10 pl-14 ml-80">
        <LineChart width={"100%"} height={"100%"} />
        <div className="flex flex-row justify-between">
          <div className="rounded-xl mr-4 border border-2 border-gray-200"> <DonutChart /></div>
          <ScheduleBoard />
        </div>
      </div>
      <NotificationBar />
    </div>
  );
};

export default HomePage;
