import type { NextPage } from "next";
import Head from "next/head";
import { ChevronRightIcon } from "@heroicons/react/outline";
import TypeIt from "typeit-react";
import { useState } from "react";

import Commands from "../components/Commands";
import Usage from "../components/Usage";
import Social from "../components/Social";
import About from "../components/About";
import Error from "../components/Error";
import ErrorU from "../components/ErrorU";
import Tech from "../components/Tech";

const commands = ["about", "info"];
const Home: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [commands, SetCommands] = useState<string[]>([]);

  const handleChange = (key: string) => {
    if (key !== "Enter") return;

    const command = input.split(" ");
    if (command[0].toLocaleLowerCase() !== "run") {
      setInput("");
      return SetCommands(commands.concat("error"));
    }
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
      case "tech":
        setInput("");
        SetCommands(commands.concat("tech"));
        break;
      case "clear":
        setInput("");
        SetCommands([]);
        break;
      default:
        setInput("");
        SetCommands(commands.concat("errorU"));
        break;
    }
    setTimeout(() => {
      const section: any = document.getElementById("bottom");
      console.log(section.scrollHeight);
      section.scrollIntoView(false);
    }, 0);
  };

  const renderCommands = () => {
    return commands.map((command, index) => {
      switch (command) {
        case "help":
          return <Commands key={index} />;
        case "usage":
          return <Usage key={index} />;
        case "social":
          return <Social key={index} />;
        case "about":
          return <About key={index} />;
        case "errorU":
          return <ErrorU key={index} />;
        case "tech":
          return <Tech key={index} />;
        default:
          return <Error key={Math.random()} />;
      }
    });
  };
  return (
    <div className="min-h-screen min-w-full">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="By Ricardo Menotti" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="fixed w-full h-full bg-black flex items-center justify-center z-50 select-none px-4 inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-sm shadow-xl  grid select-none border-green-600 border xl:w-1/2 h-96">
          <div className="w-full overflow-y-auto px-2 py-3">
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

            <div className="text-white text-mono tracking-wider">
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
            <div className="h-1 mt-2" id="bottom" />
          </div>

          <div className="h-7" />
          <div className="border-2 flex z-10 w-full bg-black bottom-0 absolute">
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
