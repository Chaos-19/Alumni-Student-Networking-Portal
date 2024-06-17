import React from "react";
import { Card } from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

type Props = {
  notification: {
    date: string;
    notification: {
      title: string;
      date: string;
      type: string;
      files?: number;
    }[];
  };
};

const ActivityCard = ({ notification }: Props) => {
  return (
    <div className="w-full p-5 flex flex-col gap-5">
      <h5 className="text-base font-bold text-[#303972] ">
        {getFormattedDate(new Date(notification.date))}
      </h5>
      <div className="flex flex-col px-2">
        {notification.notification.map((val, idx) => (
          <div className="relative px-3 flex gap-6" key={val.title}>
            <div
              className={cn(
                "relative w-[2px] mt-1",
                notification.notification.length - 1 !== idx && "bg-[#303972]"
              )}
            >
              <div className="w-4 h-4 border-4 border-[#303972] bg-white rounded-full absolute -top-[5px] -left-[7px]" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-400 justify-self-start">
                {getFormattedDate(new Date(val.date))}
              </p>
              <h5 className="text-base text-[#303972] font-medium my-3">
                {val.title}
              </h5>
              <div className="flex items-center gap-2">
                {Boolean(val.files) && (
                  <ScrollArea className="w-[900px]">
                    <div className="flex w-max space-x-4 p-4">
                      {Array.from({ length: val.files || 0 }, () => ({
                        name: "file",
                        size: 0,
                      })).map((val, idx) => (
                        <Card
                          key={`${val.name + "-" + idx}`}
                          className="w-60 h-40 bg-[#57AEF5]"
                        ></Card>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function getFormattedDate(date = new Date()) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const diffInMs = today.getTime() - date.getTime();

  if (diffInMs === 0) {
    return "Today";
  } else if (diffInMs === 24 * 60 * 60 * 1000) {
    return "Yesterday";
  } else {
    return date.toLocaleDateString("default", { weekday: "long" }); // Full day name
  }
}

export default ActivityCard;
