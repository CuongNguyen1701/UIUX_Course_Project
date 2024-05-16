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

export default function LineChart({ width, height }) {
    return (
        <div>
            <div className="border-2 border-gray-100 p-10">
                <Chart
                    chartType="Line"
                    width={width}
                    height={height}
                    data={data}
                    options={options}
                /></div>

            <div className="left-0 py-4 flex">
                <div className="mr-2 p-3 border-2 rounded-xl border-gray-100">
                    <div className="text-gray-400">Số dự án đã hoàn thành</div>
                    <div className="text-gray-700">{completedProjects}</div>
                </div>
                <div className="p-3 border-2 rounded-xl border-gray-100">
                    <div className="text-gray-400">Tiến độ chung</div>
                    <div className="text-gray-700">{completedProjectsPercentage}</div>
                </div>
            </div>
        </div>
    );
}
