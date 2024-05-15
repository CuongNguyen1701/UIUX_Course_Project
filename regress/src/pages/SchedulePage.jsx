import React from "react";
import { ScheduleBoard, Tittle } from "../components";

const SchedulePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Tittle title="Thời gian biểu" />
            <ScheduleBoard />
        </div>
    );
}

export default SchedulePage;