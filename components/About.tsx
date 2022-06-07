import { ChevronRightIcon, LinkIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

const socials = [{ name: "Github", url: "" }];
const Social = () => {
  return (
    <div className="grid">
      <div className="flex items-center">
        <ChevronRightIcon className="w-4 text-white mr-2" />
        <h1 className="text-white font-bold tracking-wide font-mono">
          Social Links:
        </h1>
      </div>
      {socials.map((social) => (
        <Link
          href={"https://github.com/menottiRicardo"}
          key={social.name}
          target="_blank"
        >
          <div className="flex cursor-pointer">
            <a className="text-white font-mono tracking-wider ml-3">
              - {social.name}
            </a>
            <LinkIcon className="w-3 text-gray-500 ml-1" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Social;
