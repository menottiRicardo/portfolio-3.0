import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
// const commands = ["about", "projects", "social links"];
const Usage = () => {
  return (
    <div className="grid">
      <div className="flex items-center">
        <ChevronRightIcon className="w-4 text-white mr-2" />
        <h1 className="text-white tracking-wide font-mono">
          usage: run [command]
        </h1>
      </div>
    </div>
  );
};

export default Usage;
