import React from "react";
import { Title } from "../components";

const ProjectName = ({ name }) => {
    return (
        <h2 className="h-8 top-40 place-content-center left-1/4 text-primary-300 text-4xl mb-20 w-8/12 absolute">
            {name}
        </h2>
    )
}

const AddButton = () => {
    return (
        <img src="src/assets/add.png" alt="Add" className="ml-8 mt-8 bg-white border-0 rounded-full w-10 hover:bg-gray-200 cursor-pointer" onClick={() => { console.log('Button clicked!') }} />
    )
}

const WorkDetails = ({ name, index, task_done, task_total }) => {
    const progress = (task_done / task_total) * 100;
    const progressColor = progress < 25 ? "bg-red-500" : progress < 50 ? "bg-yellow-500" : progress < 75 ? "bg-blue-500" : "bg-green-500";

    return (
        <div className="flex flex-row items-center bg-white transform scale-150 ml-10 mt-10">
            <p className="mr-4">Task {index}: {name}</p>
            <div className="flex items-center mr-4">
                <div className="w-64 h-2 bg-gray-200 rounded">
                    <div className={`h-full ${progressColor} rounded`} style={{ width: `${progress}%` }}></div>
                </div>
            </div>
            <div className="">{task_done}/{task_total}</div>
        </div>
    )
}

const ProjectDetails = () => {
    const project_name = "UI-UX";
    const tasks = [
        { name: "layout", task_done: 67, task_total: 123 },
        { name: "b&w", task_done: 24, task_total: 58 },
        { name: "design", task_done: 75, task_total: 100 },
        { name: "interact", task_done: 1, task_total: 10 }
    ]

    return (
        <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-white text-black">
            <Title title="Chi tiết dự án" />
            <ProjectName name={project_name} />
            {tasks.map((task, index) => (
                <WorkDetails
                    key={index}
                    name={task.name}
                    index={index + 1}
                    task_done={task.task_done}
                    task_total={task.task_total}
                />
            ))}
            <AddButton />
        </div>
    )
}

export default ProjectDetails;