import { useState } from "react";
import { Title } from "../components";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import fs from "fs";
const ProjectName = ({ name }) => {
  return (
    <h2 className="h-8 text-6xl place-content-center left-1/4 text-primary-300 w-fit ">
      Dự án: {name}
    </h2>
  );
};

const AddButton = () => {
  return (
    <img
      src="src/assets/add.png"
      alt="Add"
      className="w-10 mt-8 ml-8 bg-white border-0 rounded-full cursor-pointer hover:bg-gray-200"
      onClick={() => {
        console.log("Button clicked!");
      }}
    />
  );
};

const WorkDetails = ({ name, index, task_done, task_total }) => {
  const progress = (task_done / task_total) * 100;
  const progressColor =
    progress < 25
      ? "bg-red-500"
      : progress < 50
      ? "bg-yellow-500"
      : progress < 75
      ? "bg-blue-500"
      : "bg-green-500";

  return (
    <div className="flex flex-col items-start mt-10 ml-10 transform scale-150 bg-white">
      <p className="">
        Task {index}: {name}
      </p>
      <div className="flex items-center">
        <div className="w-64 h-2 bg-gray-200 rounded">
          <div
            className={`h-full ${progressColor} rounded`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="">
        {task_done}/{task_total}
      </div>
    </div>
  );
};
const DeleteConfirmationDialog = ({ showDialog }) => {
  return (
    showDialog && (
      <div className="fixed z-10 flex flex-col items-center justify-center w-screen h-screen bg-black bg-opacity-50">
        <div className="flex flex-col items-center justify-center w-1/4 gap-10 text-xl bg-white h-1/4 rounded-3xl">
          <h2>Bạn có chắc chắn muốn xoá dự án này?</h2>
          <div className="flex flex-row items-center justify-between w-1/2">
            <button
              className="h-full px-3 py-2 text-white bg-red-500 rounded-xl"
              onClick={() => {
                console.log("Delete");
                // redirect to project page
                window.location.href = "/projects";
              }}
            >
              Xoá
            </button>
            <button
              className="h-full px-3 py-2 text-white bg-green-500 rounded-xl"
              onClick={() => console.log("Cancel")}
            >
              Huỷ
            </button>
          </div>
        </div>
      </div>
    )
  );
};
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id == id);
  const project_name = project.title;
  const [tasks, setTasks] = useState(project.tasks);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-between w-screen h-screen text-black bg-white">
      <div>
        <Title title="Chi tiết dự án" />
      </div>
      <DeleteConfirmationDialog showDialog={showDialog} />
      <div className="flex flex-row items-center justify-between mb-10 mt-36">
        <ProjectName name={project_name} />
        <button
          className="h-full text-red-500 bg-transparent border-2 border-red-500 hover:bg-red-400 hover:text-white-100"
          onClick={() => setShowDialog(true)}
        >
          Xoá dự án
        </button>
      </div>
      <div className="flex flex-col items-center w-1/3 h-full overflow-y-auto">
        {tasks.map((task, index) => (
          <WorkDetails
            key={index}
            name={task.name}
            index={index + 1}
            task_done={task.task_done}
            task_total={task.task_total}
          />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default ProjectDetails;
