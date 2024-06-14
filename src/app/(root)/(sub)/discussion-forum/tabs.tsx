"use client";
import { HiFire } from "react-icons/hi";
import { ArrowUpRight, CircleCheckBig, Clock4 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const filterOption = [
  {
    title: "new",
    icon: <Clock4 size={15} />,
  },
  {
    title: "time",
    icon: <ArrowUpRight size={15} />,
  },
  {
    title: "hot",
    icon: <HiFire size={15} />,
  },
  {
    title: "closed",
    icon: <CircleCheckBig size={15} />,
  },
];

const Tabs = () => {
  return (
    <div className="w-full py-8 px-5">
      <div className="w-full flex items-center gap-2 flex-wrap md:flex-none">
        {filterOption.map((v) => (
          <Badge
            variant="secondary"
            className="rounded-full flex items-center gap-1 capitalize py-0  text-sm n"
            key={v.title}
          >
            {v.icon}
            {v.title}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
