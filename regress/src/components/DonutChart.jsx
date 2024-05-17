import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Hoàn thành KPI", "Tiến độ(%)"],
    ["Hoàn thành", 80],
    ["Không hoàn thành", 20],
];

export const options = {
    title: "Tiến độ KPI",
    pieHole: 0.4,
    is3D: true,
};

export function DonutChart() {
    return (
        <Chart
            chartType="PieChart"
            width="98%"
            height="300px"
            data={data}
            options={options}
        />

    );
}
