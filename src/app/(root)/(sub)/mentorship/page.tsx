import Content from "@/components/mentorship/content";
import MentorShipContentList from "@/components/mentorship/mentor-contentlist";
import Search from "@/components/mentorship/search";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import React from "react";
import List from "@/components/mentorship/list";
import { Button } from "@/components/ui/button";

type Props = {};

const card = [
  {
    title: "Schedule learning time",
    content:
      "Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler. Get startedDismiss",
  },
  {
    title: "About this mentorship program",
    content:
      "Unlock the Power of Python Programming Even if You've Never Written Code Before! Dive into the world of Python.",
  },
];

export default function page({}: Props) {
  return (
    <section className="w-full px-8 bg-gray-100">
      <div className="w-full grid grid-cols-1 md:grid-cols-[75%_25%]">
        <div className="">
          <ScrollArea className="h-screen w-full">
            <Image
              className="rounded mt-5"
              height={200}
              width={900}
              alt="NextUI hero Image"
              src="/image2.png"
            />
            <div className="w-full pt-4">
              <Content />
            </div>
            <div className="w-full flex flex-col gap-2 py-8 lg:pr-8">
              {card.map((val) => (
                <Card className="" key={val.title}>
                  <CardHeader className="my-0 py-2">
                    <CardTitle className="text-lg font-black">
                      {val.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="">
                    <p>{val.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex items-center justify-center gap-12">
              <p>By the numbers</p>
              <div>
                <ul>
                  <List data={[{ ...data[0] }]} />
                </ul>
              </div>
              <div>
                <ul>
                  <List data={[{ ...data[1] }]} />
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center mb-20 my-10">
              <Button className="text-white rounded-md text-base">
                Certificate
              </Button>
            </div>
          </ScrollArea>
        </div>
        <div className="flex flex-col gap-4 pt-8">
          <Search />
          <MentorShipContentList />
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    "Skill level": "Beginner Level",
    Students: 1497,
    Languages: "English",
    Captions: "Yes",
  },
  {
    Lectures: 22,
    Video: "1.5 total hours",
  },
];
