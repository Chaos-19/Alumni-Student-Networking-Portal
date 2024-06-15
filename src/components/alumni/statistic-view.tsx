import { cn } from "@/lib/utils";
import { Progress } from "@nextui-org/react";
import React from "react";

type Props = {
  title: string;
  persent: number;
};

const StatisticView = ({ title, persent }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "w-12 h-12 rounded bg-gradient-to-r",
          `${
            persent > 50
              ? "from-[#FCAE73] to-[#F79042]"
              : persent > 25 && persent < 65
              ? "from-[#209D43] to-[#2BC255]"
              : "from-[#9cc9ff] to-[#70A6E8]"
          }`
        )}
      />
      <div className="flex flex-col pt-5 justify-center gap-2 flex-1">
        <Progress
          label={title}
          size="md"
          value={persent}
          color={
            persent > 50
              ? "success"
              : persent > 25 && persent < 65
              ? "warning"
              : "primary"
          }
          showValueLabel={false}
          className="max-w-md rounded"
        />
        <span className="text-sm text-slate-600 font-normal">{title}</span>
      </div>
      <h4 className="text-3xl font-normal h-full flex items-center text-gray-600">
        {persent}%
      </h4>
    </div>
  );
};

export default StatisticView;
