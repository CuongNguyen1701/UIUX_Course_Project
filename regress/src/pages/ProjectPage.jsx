import React from "react";
import { LeftBar, Title, ScheduleBoard, LineChart } from "../components";

const ProjectPage = () => {
  return (
    <div className="relative flex flex-col justify-center w-screen min-h-screen bg-white">
      <Title title="Dự án" />
      <div className="flex flex-col ml-80 left-1/4">
        <LineChart width={"10%"} height={"320px"} />
      </div>
    </div>
  );
};

export default ProjectPage;
