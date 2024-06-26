import React from "react";

const Title = ({ title }) => {
  return (
    <h1 className="absolute z-40 w-8/12 h-16 mb-4 text-5xl text-gray-700 place-content-center left-1/4 top-10 bg-primary-200 rounded-xl">
      {title}
    </h1>
  );
};

export default Title;
