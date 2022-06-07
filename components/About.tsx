import {
  BriefcaseIcon,
  ChevronRightIcon,
  FolderAddIcon,
  LocationMarkerIcon,
  UserIcon,
  UserRemoveIcon,
} from "@heroicons/react/outline";
import React from "react";
import TypeIt from "typeit-react";

const About = () => {
  return (
    <div className="grid">
      <div className="flex items-center">
        <ChevronRightIcon className="w-4 text-white mr-2" />

        <div className="icon-container">
          <UserIcon className="icon" />

          <h1 className="regular-font">
            <TypeIt
              options={{ cursor: false, speed: 50 }}
              getBeforeInit={(instance) => {
                instance.type("21 years old").pause(750);

                // Remember to return it!
                return instance;
              }}
            />
          </h1>
        </div>
      </div>

      <div className="icon-container ml-6">
        <BriefcaseIcon className="icon" />
        <h1 className="regular-font">
          <TypeIt
            options={{ cursor: false, speed: 50 }}
            getBeforeInit={(instance) => {
              instance.pause(750).type("Full-Stack Developer");

              // Remember to return it!
              return instance;
            }}
          />
        </h1>
      </div>

      <div className="icon-container ml-6">
        <LocationMarkerIcon className="icon" />
        <h1 className="regular-font">
          <TypeIt
            options={{ cursor: false, speed: 50 }}
            getBeforeInit={(instance) => {
              instance.pause(1350).type("Panama");

              // Remember to return it!
              return instance;
            }}
          />
        </h1>
      </div>

      <div className="icon-container ml-6">
        <FolderAddIcon className="icon" />
        <h1 className="regular-font">
          <TypeIt
            options={{ cursor: false, speed: 50 }}
            getBeforeInit={(instance) => {
              instance.pause(2100).type("Nest Js");

              // Remember to return it!
              return instance;
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default About;
