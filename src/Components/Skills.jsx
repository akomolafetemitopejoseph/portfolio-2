import React from "react";

const Skills = () => {
  const skill = [
    { name: "react", level: "70%" },
    { name: "tailwind", level: "78%" },
    { name: "javascript", level: "50" },
    { name: "moden css", level: "78%" },
    { name: "ui/ux design", level: "78%" },
    { name: "responsive design", level: "78%" },
    { name: "wed animation", level: "70%" },
    { name: "git", level: "70%" },
  ];
  return (
    <div className="px-5 py-5  lg:px-10 lg:pt-10 text-gray-400">
      <div
        className="flex
      justify-center"
      >
        <h1>Technical Skills</h1>
      </div>
      {skill.map((skill, index) => (
        <div className=" grid grid-cols-2" key={index}>
          <h1>{skill.name}</h1>
          
          <h1>{skill.level}</h1>
          <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>
        
      ))}
    </div>
  );
};

export default Skills;
