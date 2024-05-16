import { useState } from "react";
import { LeftBar, Title, ScheduleBoard, LineChart } from "../components";

import { Link } from "react-router-dom";
const RecommendCard = ({ key, title, description, tag, process }) => {
  let tagColor;
  let processColor;
  let processWidth;

  if (tag === "Ưu tiên") {
    tagColor = "bg-primary-200";
  } else tagColor = "bg-gray-300";

  if (process <= 0) {
    processColor = "bg-white";
    processWidth = "w-0";
  } else if (process < 30) {
    processColor = "bg-red-600";
    processWidth = "w-16";
  } else if (process <= 50) {
    processColor = "bg-yellow-500";
    processWidth = "w-28";
  } else if (process < 80) {
    processColor = "bg-indigo-400";
    processWidth = "w-44";
  } else if (process < 100) {
    processColor = "bg-green-600";
    processWidth = "w-52";
  } else {
    processColor = "bg-green-600";
    processWidth = "w-56";
  }

  console.log(processColor);
  console.log(tagColor);
  return (
    <Link
      to={`${key}`}
      className="inline-flex flex-col items-center justify-start m-2 border rounded-md w-fit h-fit group border-black/opacity-10 hover:cursor-pointer"
    >
      <div className="inline-flex items-start self-stretch justify-start h-40">
        <div className="relative w-56 h-40 bg-gray-100 group-hover:bg-primary-100">
          <div className="h-full w-full flex flex-row items-center justify-center text-center text-black text-2xl font-normal font-['Roboto'] leading-none">
            {title}
          </div>
          <div
            className={`p-1 left-0 top-0 absolute ${tagColor} rounded-tl-md rounded-br-md flex-col justify-center items-center inline-flex`}
          >
            <div className="text-black text-xs font-bold font-['Roboto'] leading-none">
              {tag}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch justify-start w-56 h-20 gap-1 p-2 group-hover:bg-gray-50">
        <div className="text-black text-xs font-normal font-['Roboto'] leading-none">
          {description}
        </div>
        <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">
          Tiến độ: {process}%
        </div>
        <div className="w-full h-2.5 relative">
          <div className="w-full h-2.5 left-0 top-0 absolute bg-white rounded-lg shadow border border-black" />
          <div
            className={`${processWidth} h-2.5 left-0 top-0 absolute ${processColor} rounded-tl-lg rounded-bl-lg border border-black`}
          />
        </div>
      </div>
    </Link>
  );
};

const ProjectPage = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "UIUX",
      description: "Hanoi University of Science and Technology",
      tag: "Ưu tiên",
      process: 90,
    },
    {
      id: 2,
      title: "Giải tích 3",
      description: "Hanoi University of Science and Technology",
      tag: "Nên làm",
      process: 40,
    },
    {
      id: 3,
      title: "NeuralCV",
      description: "BusiTech BootCamp",
      tag: "Nên làm",
      process: 20,
    },
    {
      id: 4,
      title: "Intro AI",
      description: "Hanoi University of Science and Technology",
      tag: "Nên làm",
      process: 60,
    },
  ]);
  return (
    <div className="relative flex flex-col justify-center w-screen min-h-screen bg-white">
      <Title title="Dự án" />
      <div className="flex flex-col ml-80 left-1/4">
        <div className="grid grid-cols-2 mt-32 ml-16 mr-32">
          <LineChart width={"10%"} height={"320px"} />
          <div className="left-0 flex flex-col py-3">
            <div className="left-2">
              <div className="text-2xl font-semibold text-gray-700">Gợi ý</div>
            </div>
            <div className="relative grid-flow-row grid-cols-2">
              {projects.map((project) => (
                <RecommendCard
                  title={project.title}
                  description={project.description}
                  tag={project.tag}
                  process={project.process}
                  key={project.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
