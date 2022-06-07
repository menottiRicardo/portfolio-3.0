import type { NextPage } from "next";
import Head from "next/head";
import { ChevronRightIcon } from "@heroicons/react/outline";
import TypeIt from "typeit-react";
import { useState } from "react";

import Commands from "../components/Commands";
import Usage from "../components/Usage";
import Social from "../components/Social";
import About from "../components/About";

const commands = ["about", "info"];
const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [commands, SetCommands] = useState<string[]>([]);

  const handleChange = (key: string) => {
    if (key !== "Enter") return;
    console.log("kyt", key, input.split(""));
    const command = input.split(" ");
    if (command[0].toLocaleLowerCase() !== "run") return;
    switch (command[1].toLocaleLowerCase()) {
      case "help":
        setInput("");
        SetCommands(commands.concat("help"));
        break;
      case "usage":
        setInput("");
        SetCommands(commands.concat("usage"));
        break;
      case "social":
        setInput("");
        SetCommands(commands.concat("social"));
        break;
      case "about":
        setInput("");
        SetCommands(commands.concat("about"));
        break;
      case "clear":
        setInput("");
        SetCommands([]);
        break;
      default:
        break;
    }
  };

  const renderCommands = () => {
    return commands.map((command) => {
      switch (command) {
        case "help":
          return <Commands />;
        case "usage":
          return <Usage />;
        case "social":
          return <Social />;
        case "about":
          return <About />;
        default:
          return <Commands />;
      }
    });
  };
  return (
    <div className="min-h-screen min-w-full">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed w-full h-full bg-black flex items-center justify-center z-50 select-none px-4 inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-sm shadow-xl px-2 py-3 grid select-none border-green-600 border xl:w-1/2  h-96">
          <div className="w-full pb-10 overflow-y-auto">
            <div className="font-bold text-2xl text-white">
              <TypeIt
                getBeforeInit={(instance) => {
                  instance
                    .type("Hi, I'm ricardo Menotti")
                    .pause(750)
                    .move(-14)
                    .delete(1)
                    .type("R")
                    .move(14)
                    .type("!")
                    .pause(500)
                    .options({ cursor: false, cursorChar: "" });

                  return instance;
                }}
              />
            </div>

            <div className="text-white text-mono tracking-wide">
              <TypeIt
                getBeforeInit={(instance) => {
                  instance.pause(7000).type("usage: run [command]").pause(750);

                  // Remember to return it!
                  return instance;
                }}
              />
            </div>

            <div className="text-white pb-5 text-mono tracking-wider">
              <TypeIt
                options={{ cursor: false, speed: 50 }}
                getBeforeInit={(instance) => {
                  instance
                    .pause(9500)
                    .type("Please run 'run help' to see the available commands")
                    .pause(750);

                  // Remember to return it!
                  return instance;
                }}
              />
            </div>

            <div>{renderCommands()}</div>
          </div>

          <div className="h-6"></div>
          <div className="border-2 flex absolute z-10 bottom-0 w-full bg-black">
            <ChevronRightIcon className="w-7 text-white animate-pulse" />
            <input
              type="text"
              className="w-full bg-transparent outline-none text-white caret-green-500"
              value={input.toLocaleLowerCase()}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => handleChange(e.key)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
