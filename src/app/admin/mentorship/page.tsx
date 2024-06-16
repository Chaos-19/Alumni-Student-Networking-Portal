import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CircularProgress } from "@nextui-org/react";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStatsChart } from "react-icons/io5";

const course = {
  title: "Machine Learning: Beginner to Advanced",
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  externalLink: [
    "https://www.udemy.com/course/machine-learning-beginner",
    "https://www.udemy.com/course/machine-learning-beginner-to-advanced/?couponCode=HAPPYNEWYEAR",
    "https://www.udemy.com/course/",
  ],
  uploads: [
    "Video #2",
    "Video #3",
    "Article by Alumni",
    "Book on Machine Learning.pdf",
  ],
};

type Props = {};

export default function page({ }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
      <ScrollArea className="h-screen w-full px-6">
        <Card className="w-full p-6 flex flex-col gap-8 mb-24 mt-6">
          <div className="w-full flex gap-4">
            <video className="w-64 h-44 rounded-xl aspect-video" controls>
              <source
                src="/Big_Buck_Bunny_Trailer_1080p_5s.mp4"
                type="video/mp4"
              />
              <source
                src="/Big_Buck_Bunny_Trailer_1080p_5s.ogv"
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
            <div className="flex justify-between w-full border border-red-50">
              <div className="flex flex-col justify-center gap-4 ">
                <h2 className="text-xl font-bold text-[#303972]">
                  {course.title}
                </h2>
                <div>
                  <Button size="sm">publish</Button>
                </div>
                <p className="text-sm text-gray-500">{course.details}</p>
              </div>
              <Ellipsis />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <IoStatsChart className="text-[#57AEF5] font-black" size={50} />
              <div className="flex flex-col gap-1">
                <span className="text-[#303972] font-bold text-xl">1.456</span>
                <span className="text-gray-500">Total Signups</span>
              </div>
            </div>
            <CircularProgress
              size="lg"
              value={70}
              color="default"
              showValueLabel={true}
            />
          </div>
          <div className="flex w-full items-center gap-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-[#303972] font-bold text-xl">Description</h3>
              <p className="text-gray-500 text-sm">{course.details}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#303972] font-bold text-xl">
                External Link
              </h3>
              <ul className="text-gray-500">
                {[...course.externalLink].map((link) => (
                  <li key={String(link)}>
                    <Link
                      href={String(link)}
                      className="text-xs text-[#57AEF5] text-ellipsis"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-end gap-5 mt-20">
            <div className="flex items-center gap-5">
              <Button
                variant="outline"
                className="text-[#57AEF5] bordre-[#57AEF5] bg-white"
              >
                Reject
              </Button>
              <Button className="bg-[#57AEF5] text-white">Approve</Button>
            </div>
          </div>
        </Card>
      </ScrollArea>
      <ScrollArea className="h-screen w-full">
        <div className="flex flex-col gap-5 mb-24 mt-6">
          <h3 className="text-[#303972] font-bold text-xl">Uploads</h3>
          <div className="flex flex-col gap-3 h-full">
            {[...course.uploads].map((item) => (
              <div className="flex gap-2 items-center" key={String(item)}>
                <Image
                  src="/Rectangle 12347.png"
                  width={110}
                  height={80}
                  alt="logo"
                />
                <p className="text-[#303972] font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
