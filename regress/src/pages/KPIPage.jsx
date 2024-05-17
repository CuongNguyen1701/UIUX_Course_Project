import React from "react";
import { Title } from "../components";
import teach from "../assets/teach.png";
import research from "../assets/research.png";
import service from "../assets/service.png";
import { Bar } from 'react-chartjs-2';
import { useState } from "react";
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

const CategoryBox = ({ title, task_done, task_total, icon, onClick }) => {
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
        <div>
            <div className="flex flex-col items-center justify-center h-40 m-4 text-black bg-white border-2 rounded-lg w-60">
                <div className="flex flex-row m-6">
                    <img src={icon} alt="icon" className="w-16 h-16" />
                    <div className="ml-4 text-lg font-bold">{title}</div>
                </div>
                <div className="text-sm text-gray-500">
                    <span className={`text-2xl font-bold ${color}`}>{task_done}</span>/{task_total}
                </div>
            </div>
            <div onClick={onClick}>
            </div>
        </div>
    );
}

const CheckListItem = ({ title, checked }) => {
    let text_color = checked ? 'text-black font-bold' : 'text-gray-500';
    return (
        <div className="flex flex-row items-center bg-white border-2 rounded-lg m-3">
            <input type="checkbox" checked={checked} className="m-4" />
            <div className={`text-sm ${text_color} justify-start`}>{title}</div>
        </div >
    );
}

const CheckList = ({ title, items }) => {
    if (items === null || items.length === 0) {
        console.log("No data");
        return (
            <div className="absolute w-1/6 rounded-lg bg-secondary-200 right-20 bottom-12">
                <div className="m-4 text-2xl font-bold">{title}</div>
            </div>
        );
    };
    return (
        <div className="flex flex-col absolute w-72 rounded-2xl h-3/4 bg-primary-300 right-16 bottom-12">
            <div className="m-4 text-2xl font-bold items-center justify-center">{title}</div>
            {items.map((item, index) => (
                <CheckListItem className='items-center justify-center' key={index} title={item.title} checked={item.checked} />
            ))}
        </div>
    );
}

const KPIPage = () => {
    const check_list = [
        {
            title: 'Giảng dạy',
            items: [
                { title: 'Số tiết giảng dạy: 20/95', checked: false },
                { title: 'Đánh giá của sinh viên: 19/20', checked: false },
                { title: 'Chấm bài review round 1', checked: true },
                { title: 'Chấm bài review round 2', checked: false },
                { title: 'Chấm bài review round 3', checked: false },
            ]
        },
        {
            title: 'Nghiên cứu',
            items: [
                { title: 'Viết bài báo khoa học về tính dùng được', checked: true },
                { title: 'Tham dự hội thảo khoa học UI - UX', checked: false },
            ]
        },
        {
            title: 'Phục vụ',
            items: [
                { title: 'Tham gia tổ chức hội thảo khoa học ở Đà Nẵng', checked: false },
                { title: 'Tham gia tổ chức hội thảo khoa học ở UET', checked: false },
            ]
        }
    ]
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
                data: [1, 2, 1, 2],
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
        { id: "teaching", title: "Giảng dạy", task_done: 15, task_total: 19, icon: teach },
        { id: "research", title: "Nghiên cứu", task_done: 17, task_total: 35, icon: research },
        { id: "service", title: "Phục vụ", task_done: 6, task_total: 24, icon: service },
    ]);
    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-white">
            <Title title="KPI" />
            <div className="relative flex flex-row items-center justify-center w-full h-full">
                <div className="relative flex flex-col items-center justify-center w-full h-full">
                    <div className="relative flex flex-row flex-wrap items-center justify-center top-9 m-9">
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
                    <div className="relative items-center w-1/2 border-2 rounded-lg h-1/2">
                        <Bar className="w-full" data={data} options={options} />
                    </div>
                </div>
                <CheckList className='absolute right-0' title={check_list[0].title} items={check_list[0].items} />
            </div>
        </div>
    );
};

export default KPIPage;
