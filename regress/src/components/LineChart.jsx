import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    [
        "Thời gian (tháng)",
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

let completedProjectsPercentage =
    completedProjects /
    data.slice(1).reduce((total, current) => {
        return total + current[1] + current[2] + current[3] + current[4];
    }, 0);
completedProjectsPercentage = completedProjectsPercentage.toFixed(4);
completedProjectsPercentage =
    Math.round(completedProjectsPercentage * 100) + "%";

export default function LineChart({ width, height }) {
    return (
        <div className="pt-10">
            <div className="p-5 border-2 border-gray-200 rounded-xl">
                <Chart chartType="Line" data={data} options={options} height={height} />
            </div>

            <div className="left-0 flex py-3">
                <div className="p-3 mr-2 border-2 border-gray-100 rounded-xl">
                    <div className="text-gray-400">Số dự án đã hoàn thành</div>
                    <div className="text-gray-700">{completedProjects}</div>
                </div>
                <div className="p-3 border-2 border-gray-100 rounded-xl">
                    <div className="text-gray-400">Tiến độ chung</div>
                    <div className="text-gray-700">{completedProjectsPercentage}</div>
                </div>
            </div>
        </div>
    );
}
