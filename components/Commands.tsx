import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
const commands = ["usage", "help", "clear", "about", "projects", "social"];
const Commands = () => {
  return (
    <div className="grid">
      <div className="flex items-center">
        <ChevronRightIcon className="w-4 text-white mr-2" />
        <h1 className="text-white font-bold tracking-wide font-mono">
          Available Commands are:
        </h1>
      </div>
      {commands.map((com) => (
        <a key={com} className="text-white font-mono tracking-wider ml-3">
          - {com}
        </a>
      ))}
    </div>
  );
};

export default Commands;
