import React, { useContext } from "react";
import { IconButton } from "../common/IconButton";
import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";
import { webprojects } from "../../data/webproj";
import Image from "../common/Image";
import { DarkModeContext } from "../../App";

interface DataItem {
  item?: any;
  text: string;
  url?: string;
  image?: string;
  description?: string;
  stack?: any;
  github?: string | null;
}

interface ItemProps {
  item: DataItem;
}

function Web() {
  const { isDarkMode } = useContext(DarkModeContext);

  const Item: React.FC<ItemProps> = ({ item }) => {
    return (
      <div
        className={`group rounded-xl sm:rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
          isDarkMode
            ? "bg-slate-800 border-slate-700 hover:border-primary-400"
            : "bg-white border-slate-200 hover:border-primary-200"
        }`}
      >
        {/* Project Image */}
        <div className="relative h-40 sm:h-48 bg-slate-100 overflow-hidden">
          <Image src={item?.image} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Overlay Actions */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-2 sm:space-x-3">
              {item?.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center text-slate-700 hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg"
                >
                  <RiGithubFill className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              )}
              {item?.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center text-slate-700 hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg"
                >
                  <RiExternalLinkLine className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {/* Project Title */}
          <h3
            className={`text-lg sm:text-xl font-bold transition-colors ${
              isDarkMode
                ? "text-white group-hover:text-slate-200"
                : "text-slate-900 group-hover:text-slate-700"
            }`}
          >
            {item?.text}
          </h3>

          {/* Project Description */}
          {item?.description && (
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {item?.description}
            </p>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {item?.stack.map((tech: string, index: number) => (
              <span
                key={index}
                className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full border ${
                  isDarkMode
                    ? "bg-slate-700 text-slate-300 border-slate-600"
                    : "bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3 pt-2">
            {item?.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-primary-300 text-slate-900 text-xs sm:text-sm font-medium rounded-md hover:bg-primary-400 transition-all duration-300"
              >
                <RiGithubFill className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Code
              </a>
            )}
            {item?.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 border-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 ${
                  isDarkMode
                    ? "border-primary-400 text-slate-300 hover:border-primary-300 hover:bg-primary-900/20"
                    : "border-primary-200 text-slate-700 hover:border-primary-300 hover:bg-primary-50"
                }`}
              >
                <RiExternalLinkLine className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {webprojects.map((item: any, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

export default Web;
