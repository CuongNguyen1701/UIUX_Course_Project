import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    [
        "Thời gian",
        "Hoàn thành xuất sắc",
        "Không hoàn thành",
        "Hoàn thành",
        "Hoàn thành tốt",
    ],
    [1, 3, 8, 1, 2],
    [2, 3, 6, 2, 5],
    [3, 6, 5, 8, 4],
    [4, 1, 8, 12, 4],
];

export const options = {
    chart: {
        title: "Số lượng công việc hoàn thành",
        subtitle: "Dự án",
    },
};

let completedProjects = data.slice(1).reduce((total, current) => {
    return total + current[1] + current[3] + current[4];
}, 0);

let completedProjectsPercentage = completedProjects / data.slice(1).reduce((total, current) => {
    return total + current[1] + current[2] + current[3] + current[4];
}, 0);
completedProjectsPercentage = completedProjectsPercentage.toFixed(4);
completedProjectsPercentage = Math.round(completedProjectsPercentage * 100) + "%";


const RecommendCard = ({ title, description, tag, process }) => {
    let tagColor;
    let processColor;
    let processWidth;

    if (tag === "Ưu tiên") {
        tagColor = 'bg-indigo-200';
    }
    else tagColor = 'bg-gray-300';

    if (process <= 0) {
        processColor = 'bg-white';
        processWidth = 'w-0';
    }
    else if (process < 30) {
        processColor = 'bg-red-600';
        processWidth = 'w-16';
    } else if (process <= 50) {
        processColor = 'bg-yellow-500';
        processWidth = 'w-28';
    } else if (process < 80) {
        processColor = 'bg-indigo-400';
        processWidth = 'w-44';
    } else if (process < 100) {
        processColor = 'bg-green-600';
        processWidth = 'w-52';
    }
    else {
        processColor = 'bg-green-600';
        processWidth = 'w-56';
    }

    console.log(processColor);
    console.log(tagColor);
    return (
        <div className="group w-64 h-64 rounded-md border border-black/opacity-10 flex-col justify-start items-center inline-flex mr-3" >
            <div className="self-stretch h-40 justify-start items-start inline-flex">
                <div className="w-64 h-40 relative bg-gray-100 group-hover:bg-primary-100">
                    <div className="w-60 h-4 left-[16px] top-[74px] absolute text-center text-black text-2xl font-normal font-['Roboto'] leading-none">{title}</div>
                    <div className={`p-1 left-0 top-0 absolute ${tagColor} rounded-tl-md rounded-br-md flex-col justify-center items-center inline-flex`}>
                        <div className="text-black text-xs font-bold font-['Roboto'] leading-none">{tag}</div>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-24 p-2 flex flex-col justify-start items-start gap-1 group-hover:bg-gray-50">
                <div className="text-black text-xs font-normal font-['Roboto'] leading-none">{description}</div>
                <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">Tiến độ: {process}%</div>
                <div className="w-64 h-2.5 relative">
                    <div className="w-56 h-2.5 left-0 top-0 absolute bg-white rounded-lg shadow border border-black" />
                    <div className={`${processWidth} h-2.5 left-0 top-0 absolute ${processColor} rounded-tl-lg rounded-bl-lg border border-black`} />
                </div>
            </div>
        </div>
    );
}


export default function LineChart({ width, height }) {
    return (
        <div className="mt-56">
            <div className="border-2 border-gray-200 rounded-xl p-5">
                <Chart
                    chartType="Line"
                    width={width}
                    height={height}
                    data={data}
                    options={options}
                /></div>

            <div className="left-0 py-3 flex">
                <div className="mr-2 p-3 border-2 rounded-xl border-gray-100">
                    <div className="text-gray-400">Số dự án đã hoàn thành</div>
                    <div className="text-gray-700">{completedProjects}</div>
                </div>
                <div className="p-3 border-2 rounded-xl border-gray-100">
                    <div className="text-gray-400">Tiến độ chung</div>
                    <div className="text-gray-700">{completedProjectsPercentage}</div>
                </div>
            </div>

            <div className="left-0 py-3 flex flex-col">
                <div className="left-2">
                    <div className="text-gray-700 pb-8">Gợi ý</div>
                </div>
                <div className="relative flex">
                    <RecommendCard title="UIUX" description="Hanoi University of Science and Technology" tag="Ưu tiên" process="90" />
                    <RecommendCard title="Giải tích 3" description="Hanoi University of Science and Technology" tag="Nên làm" process="40" />
                    <RecommendCard title="NeuralCV" description="BusiTech BootCamp" tag="Nên làm" process="20" />
                    <RecommendCard title="Intro AI" description="Hanoi University of Science and Technology" tag="Nên làm" process="60" />

                </div>
            </div>
        </div>
    );
}
