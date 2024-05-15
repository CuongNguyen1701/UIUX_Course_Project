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

export default function LineChart({ width, height }) {
    return (
        <Chart
            chartType="Line"
            width={width}
            height={height}
            data={data}
            options={options}
        />
    );
}
