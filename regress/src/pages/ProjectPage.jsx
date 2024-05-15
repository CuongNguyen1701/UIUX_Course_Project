import React from "react";
import { LeftBar, Tittle, ScheduleBoard, LineChart } from "../components";

const ProjectPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-white">
            <Tittle title="Dự án" />
            <div className="absolute left-1/4">

                <LineChart width={"150%"} height={"500px"} />
            </div>
        </div>
    );
}

export default ProjectPage;