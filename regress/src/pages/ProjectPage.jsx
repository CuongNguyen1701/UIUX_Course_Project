import React from "react";
import { LeftBar, Title, ScheduleBoard, LineChart } from "../components";

const ProjectPage = () => {
    return (
        <div className="relative flex flex-col justify-center h-screen w-screen bg-white">
            <Title title="Dự án" />
            <div className="absolute left-1/4 flex flex-col">
                <LineChart width={"100%"} height={"350px"} />
            </div>
        </div>
    );
}

export default ProjectPage;