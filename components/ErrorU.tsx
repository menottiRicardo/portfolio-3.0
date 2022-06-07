import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";

const ErrorU = () => {
  return (
    <div className="grid">
      <div className="flex items-center">
        <ChevronRightIcon className="w-4 text-white mr-2" />
        <h1 className="regular-font font-bold text-red-500">run Error 501</h1>
      </div>
      <h1 className="regular-font text-red-500">
        Command not found, please run help to see available commands
      </h1>
    </div>
  );
};

export default ErrorU;
