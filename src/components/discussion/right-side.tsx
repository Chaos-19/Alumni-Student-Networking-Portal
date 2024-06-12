import {
  Award,
  CircleHelp,
  Heart,
  MessageCircleMore,
  Search,
  Tag,
} from "lucide-react";
import { TfiMenuAlt } from "react-icons/tfi";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const menu = [
  {
    lable: "Search",
    icon: <Search size={18} />,
  },
  {
    menu: [
      {
        lable: "Questions",
        icon: <TfiMenuAlt />,
      },
      {
        lable: "Tags",
        icon: <Tag size={18} />,
      },
      {
        lable: "Ranking",
        icon: <Award size={18} />,
      },
    ],
    "PERSONAL NAVIGATOR": [
      {
        lable: "Your questions",
        icon: <CircleHelp size={18} />,
      },
      {
        lable: "Your answers",
        icon: <MessageCircleMore size={18} />,
      },
      {
        lable: "Your likes & votes",
        icon: <Heart size={18} />,
      },
    ],
  },
];

const Sidebar = (props: Props) => {
  return (
    <div className="w-full h-full flex justify-center">
      <aside className="pt-3 w-full">
        <ListNav />
      </aside>
    </div>
  );
};

const ListNav = () => {
  return (
    <div>
      {menu?.map((val, idx) => (
        <ul className="flex gap-2 flex-col items-center w-full text-base" key={val.lable}>
          {idx == 0 ? (
            <Button
              variant="ghost"
              className="flex items-center justify-center  py-1.5 w-full my-5 rounded-none relative group"
              key={val.lable}
            >
              <div className="absolute left-0 top-0 bottom-0 md:w-2 bg-[#61B0E8] hidden group-hover:block transition duration-700 ease-in-out" />
              <div className="flex items-center gap-x-2 sm:w-[70%]">
                {val.icon} <span className="hidden md:inline">{val.lable}</span>
              </div>
            </Button>
          ) : (
            <>
              <Button
                key={val.lable}
                variant="ghost"
                className="flex items-center justify-center py-1.5 w-full rounded-none text-gray-400"
              >
                <div className="hidden sm:flex items-center md:w-[70%] text-xs sm:text-balance">
                  Menu
                </div>
              </Button>
              {val["menu"]?.map((sub, i) => (
                <Button
                  key={sub.lable + i}
                  variant="ghost"
                  className="flex items-center justify-center w-full p-1.5 rounded-none relative group"
                >
                  <div className="absolute left-0 top-0 bottom-0 md:w-2 bg-[#61B0E8] hidden group-hover:block transition duration-700 ease-in-out" />
                  <div className="flex items-center justify-start gap-x-2 lg:w-[70%]">
                    {sub.icon} <span className="hidden md:inline">{sub.lable}</span>
                  </div>
                </Button>
              ))}
              <Button
                key={val.lable}
                variant="ghost"
                className="flex items-center justify-center  py-1.5 w-full rounded-none"
              >
                <div className="hidden sm:flex items-center gap-x-2 sm:w-[70%] text-gray-400 text-xs sm:text-balance">
                  PERSONAL NAVIGATOR
                </div>
              </Button>
              {val["PERSONAL NAVIGATOR"]?.map((sub, i) => (
                <Button
                  key={sub.lable}
                  variant="ghost"
                  className="flex items-center justify-center py-1.5 w-full rounded-none relative group"
                >
                  <div className="absolute left-0 top-0 bottom-0 md:w-2 bg-[#61B0E8] hidden group-hover:block transition duration-700 ease-in-out" />
                  <div className="flex items-center gap-x-2 lg:w-[70%]">
                    {sub.icon} <span className="hidden md:inline">{sub.lable}</span>
                  </div>
                </Button>
              ))}
            </>
          )}
        </ul>
      ))}
    </div>
  );
};

export default Sidebar;
