import { useState } from "react";
import { Title } from "../components";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import fs from "fs";
import deleteIcon from "../assets/delete.svg";
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

const WorkDetails = ({ editMode, name, index, task_done, task_total }) => {
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
      <div className="flex flex-row items-center gap-5">
        <div className="w-64 h-2 bg-gray-200 rounded">
          <div
            className={`h-full ${progressColor} rounded`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {editMode && (
          <img
            src={deleteIcon}
            className="w-5 h-5 rounded-full hover:bg-red-100 hover:cursor-pointer"
            alt="Delete"
          />
        )}
      </div>
      {task_done}/{task_total}
    </div>
  );
};
const DeleteConfirmationDialog = ({ showDialog, setShowDialog }) => {
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
              onClick={() => setShowDialog(false)}
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
  const [editMode, setEditMode] = useState(true);
  const [addTaskMode, setAddTaskMode] = useState(false);
  const handleDeleteTask = (index) => {};
  const toggleEditMode = (e) => {
    e.preventDefault();
    setEditMode((prev) => !prev);
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: e.target[0].value,
        task_done: e.target[1].value,
        task_total: e.target[2].value,
      },
    ]);
    setAddTaskMode(false);
  };
  return (
    <div className="relative flex flex-col items-center justify-between w-screen h-screen text-black bg-white">
      <div>
        <Title title="Chi tiết dự án" />
      </div>
      <DeleteConfirmationDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
      <div className="flex flex-row items-center justify-between w-1/2 mb-10 mt-36">
        <ProjectName name={project_name} />
        <div className="flex flex-row gap-3 select-none">
          <div
            className="h-full px-3 py-2 text-red-500 bg-transparent border-2 border-red-500 cursor-pointer hover:bg-red-400 hover:text-white-100 hover:border-red-400 rounded-xl"
            onClick={() => setShowDialog(true)}
          >
            Xoá dự án
          </div>
          {/* <div
            className={`h-full px-3 py-2 rounded-xl border-2 cursor-pointer
            ${
              editMode
                ? " bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-700 hover:text-white-100 hover:border-yellow-700"
                : "text-yellow-500 bg-transparent border-yellow-500 hover:bg-yellow-400 hover:text-black hover:border-yellow-400"
            } `}
            onClick={toggleEditMode}
          >
            {editMode ? "Dừng cập nhật" : "Cập nhật dự án"}
          </div> */}
        </div>
      </div>
      <div className="flex flex-col items-center w-1/3 h-full overflow-y-auto">
        <div
          className="w-2/3 text-4xl font-thin border-2 rounded-full text-primary border-primary hover:bg-primary hover:text-white hover:cursor-pointer"
          onClick={() => setAddTaskMode(true)}
        >
          +
        </div>
        {addTaskMode && (
          <form
            className="flex flex-row items-center justify-between gap-2 mt-10 ml-20 transform bg-white"
            onSubmit={handleAddTask}
          >
            Task mới:
            <p className="">
              <input
                type="text"
                placeholder="Tên..."
                className="p-1 bg-white border-2 border-primary rounded-xl"
              />
            </p>
            <input
              type="text"
              placeholder="đã hoàn thành"
              className="w-1/4 p-1 bg-white border-2 border-primary rounded-xl"
            />
            /
            <input
              type="text"
              placeholder="tổng số"
              className="w-1/4 p-1 bg-white border-2 border-primary rounded-xl"
            />
            <button
              name="submit"
              className="text-white rounded-full bg-primary hover:bg-primary-200 hover:cursor-pointer"
            >
              +
            </button>
          </form>
        )}
        {tasks.map((task, index) => (
          <WorkDetails
            editMode={editMode}
            id={task.id}
            key={task.id}
            name={task.name}
            index={index + 1}
            task_done={task.task_done}
            task_total={task.task_total}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
