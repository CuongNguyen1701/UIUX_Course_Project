import React from "react";
import { LeftBar, Title, ScheduleBoard, LineChart } from "../components";
import teach from "../assets/teach.png";
import research from "../assets/research.png";
import service from "../assets/service.png";

const CategoryBox = ({ title, task_done, task_total, icon }) => {
    const percentage = Math.min((task_done / task_total) * 100, 100);

    let color, rating;
    if (percentage <= 25) {
        color = 'text-red-500';
        rating = 'Thấp';
    } else if (percentage <= 50) {
        color = 'text-yellow-500';
        rating = 'Trung bình';
    } else if (percentage <= 75) {
        color = 'text-blue-500';
        rating = 'Tốt';
    } else {
        color = 'text-green-500';
        rating = 'Xuất sắc';
    }

    return (
        <div className="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-lg border-2 text-black m-4">
            <div className="flex flex-row m-6">
                <img src={icon} alt="icon" className="w-16 h-16" />
                <div className="text-lg font-bold ml-4">{title}</div>
            </div>
            <div className="text-sm text-gray-500">
                <span className={`text-2xl font-bold ${color}`}>{task_done}</span>/{task_total}
            </div>
            {/* <div className={`${color}`}>
                {rating}
            </div> */}
        </div>
    );
}

import { useState } from "react";

const KPIPage = () => {
    const [categories, setCategories] = useState([
        { title: "Giảng dạy", task_done: 102, task_total: 72, icon: teach },
        { title: "Nghiên cứu", task_done: 60, task_total: 90, icon: research },
        { title: "Phục vụ", task_done: 10, task_total: 20, icon: service },
    ]);
    return (
        <div className="relative flex flex-row flex-wrap items-center justify-center w-screen h-screen bg-white">
            <Title title="KPI" />
            {categories.map((category, index) => (
                <CategoryBox
                    key={index}
                    title={category.title}
                    task_done={category.task_done}
                    task_total={category.task_total}
                    icon={category.icon}
                />
            ))}
        </div>
    );
};

export default KPIPage;
