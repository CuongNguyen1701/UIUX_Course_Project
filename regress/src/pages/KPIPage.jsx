import React from "react";
import { LeftBar, Title, ScheduleBoard, LineChart } from "../components";
import teach from "../assets/teach.png";
import research from "../assets/research.png";
import service from "../assets/service.png";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js'

// const tailwindConfig = import('../tailwind.config.js');

// const colors = tailwindConfig.theme.colors;

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

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
        <div className="flex flex-col items-center justify-center w-60 h-40 bg-white rounded-lg border-2 text-black m-4">
            <div className="flex flex-row m-6">
                <img src={icon} alt="icon" className="w-16 h-16" />
                <div className="text-lg font-bold ml-4">{title}</div>
            </div>
            <div className="text-sm text-gray-500">
                <span className={`text-2xl font-bold ${color}`}>{task_done}</span>/{task_total}
            </div>
        </div>
    );
}

import { useState } from "react";

const KPIPage = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
            {
                label: 'Giảng dạy',
                data: [6, 1, 3, 5],
                backgroundColor: '#194DD3',
                bordercolor: 'black',
                borderwidth: 1,
            },
            {
                label: 'Nghiên cứu',
                data: [2, 3, 7, 5],
                backgroundColor: '#B3ACFB',
                bordercolor: 'black',
                borderwidth: 1,
            },
            {
                label: 'Phục vụ',
                data: [3, 1, 8, 6],
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

    const [categories, setCategories] = useState([
        { title: "Giảng dạy", task_done: 15, task_total: 19, icon: teach },
        { title: "Nghiên cứu", task_done: 17, task_total: 35, icon: research },
        { title: "Phục vụ", task_done: 18, task_total: 78, icon: service },
    ]);
    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-white">
            <div>
                <Title title="KPI" />
            </div>
            <div className="relative flex flex-row flex-wrap items-center justify-center bg-white top-9 m-9">
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
            <div className="relative items-center bg-white border-2 rounded-lg w-1/2 h-1/2">
                <Bar className="w-full" data={data} options={options} />
            </div>
        </div>
    );
};

export default KPIPage;
