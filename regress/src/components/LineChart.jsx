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
    [1, 37.8, 80.8, 10, 20],
    [2, 30.9, 69.5, 20, 30],
    [3, 25.4, 57, 30, 40],
    [4, 11.7, 18.8, 40, 50],
    [5, 11.9, 17.6, 50, 60],
    [6, 8.8, 13.6, 60, 70],
    [7, 7.6, 12.3, 70, 80],
    [8, 12.3, 29.2, 80, 90],
    [9, 16.9, 42.9, 90, 100],
    [10, 12.8, 30.9, 100, 110],
    [11, 5.3, 7.9, 110, 120],
    [12, 6.6, 8.4, 120, 130],
    [13, 4.8, 6.3, 130, 140],
    [14, 4.2, 6.2, 140, 150],
];

export const options = {
    chart: {
        title: "Số lượng công việc hoàn thành",
        subtitle: "Dự án",
    },
};

export default function App() {
    return (
        <Chart
            chartType="Line"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
