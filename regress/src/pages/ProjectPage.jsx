import React from "react";
import { LeftBar, Title, ScheduleBoard, LineChart } from "../components";

const ProjectPage = () => {
    return (
<<<<<<< HEAD
        <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-white">
            <Tittle title="Dự án" />
            <div className="absolute left-1/4 flex items-center justify-center">
                <div className="w-10/12">
                    <LineChart width={"100%"} height={"300px"} />
                </div>
                <div className="pl-32 w-2/12 h-full flex flex-col items-center justify-center">
                    <button className="m-2 bg-green-400 w-44">Thêm dự án</button>
                    <button className="m-2 bg-red-400 w-44">Xoá dự án</button>
                    <button className="m-2 bg-yellow-400 w-44">Cập nhật dự án</button>
                </div>
            </div>
=======
        <div>
            {/* <Title title="Dự án" /> */}
            <LineChart />
>>>>>>> refs/remotes/origin/main
        </div>
    );
}

export default ProjectPage;