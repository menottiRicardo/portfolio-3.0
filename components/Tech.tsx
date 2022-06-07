import { ChevronRightIcon, ChipIcon } from "@heroicons/react/outline";
import React from "react";
const commands = [
  "React js",
  "Next js",
  "TailwindCSS",
  "ChakraUI",
  "Apollo",
  "GraphQl",
  "Rest",
  "Nest js",
  "Node js",
  "MongoDb",
  "PostgreSQL",
  "Cypress",
  "Jest",
  "Aws",
];
const Tech = () => {
  return (
    <div className="grid">
      <div className="flex items-center">
        <ChevronRightIcon className="w-4 text-white mr-2" />
        <h1 className="text-white font-bold tracking-wide font-mono">
          Current Tech Stack
        </h1>
      </div>

      <div className="grid grid-cols-2">
        {commands.map((com) => (
          <a key={com} className="regular-font ml-3 flex">
            <ChipIcon className="text-green-500 w-5 mr-2 " /> {com}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tech;
