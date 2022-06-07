import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";

const Error = () => {
  return (
    <div className="grid">
      <div className="flex items-center">
        <ChevronRightIcon className="w-4 text-white mr-2" />
        <h1 className="regular-font font-bold text-red-500">run Error 101</h1>
      </div>
      <h1 className="regular-font text-red-500">
        {'the usage is "run [any command]"'}
      </h1>
    </div>
  );
};

export default Error;
