"use client";
import React, { useState } from "react";
import { Badge } from "../ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { PlayIcon } from "lucide-react";

type Props = {};

const carosels = [
  {
    img: "/picture.png",
    priceOriginal: 69.99,
    discount: 69.99,
    title: "Beyond Pixels: Mastering Advanced Photoshop Techniques",
    session: "ShutterCraft Academy",
  },
  {
    img: "/picture2.png",
    priceOriginal: 69.99,
    discount: 69.99,
    title: "Creative Canvas: Unleashing Your Inner Artist",
    session: "ArtHub Academy",
  },
  {
    img: "/picture3.png",
    priceOriginal: 69.99,
    discount: 69.99,
    title: "Mindful Productivity: The Art of Time Management",
    session: "ZenZone Learning",
  },
];

const MainSecond = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="">
            <Badge className="bg-[#E8F6FF] text-[#57AEF5] hover:border-[#57AEF5] hover:bg-white">
              POPULAR COURSE
            </Badge>
          </div>
          <h3 className="text-3xl font-black">
            Learn from the Best to Become the Best
          </h3>
        </div>
        <div className="flex items-center gap-2 w-full py-4">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full  ml-auto p-5"
          >
            <CarouselContent className="scroll-mx-10 p-5">
              {[...carosels, ...carosels].map((_, index) => (
                <CaroselCard key={_.title} {..._} />
              ))}
            </CarouselContent>
            <Button
              variant="outline"
              className="px-5 py-3 rounded-3xl mt-2 border-2 text-[#57AEF5] border-[#57AEF5] hover:bg-[#57AEF5] hover:text-white"
            >
              View More
            </Button>
            <div className="absolute bottom-[8%] right-20 ">
              <CarouselPrevious className="absolute bottom-0  text-white bg-[#57AEF5] " />
              <CarouselNext className=" text-white bg-[#57AEF5] " />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

function CaroselCard({
  title,
  priceOriginal,
  discount,
  session,
  img,
}: {
  img: string;
  title: string;
  priceOriginal: number;
  discount: number;
  session: string;
}) {
  return (
    <CarouselItem
      className={cn(
        "md:basis-1/5 lg:basis-1/4 hover:md:basis-[30%] hover:lg:basis-1/2 group transition ease-in-out duration-700"
      )}
    >
      <Card className="transition ease-in-out duration-700">
        <div
          className={cn(
            "grid grid-cols-1 group-hover:grid-cols-2 transition-all"
          )}
        >
          <div className="relative">
            <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
              <h4 className="text-white font-medium text-large">{title}</h4>
              <p className="text-tiny text-white/60 uppercase font-bold">
                {title}
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full object-cover h-72 transition ease-in-out duration-700 bg-red-500/50"
              src={img}
            />
          </div>
          <div
            className={cn(
              "h-full justify-end hidden group-hover:flex flex-col transition ease-in-out duration-700 bg-[#E8F6FF] py-3 gap-2"
            )}
          >
            <p className="text-sm font-semibold px-5">
              With a decade of experience in the ever-evolving landscape of
              digital marketing, James brings practical insights and hands-on
              strategies to her courses.
            </p>
            <div className="flex items-center gap-2 px-4 text-[#57AEF5]">
              <span className="px-1 py-1 rounded-full bg-[#57AEF5] text-white">
                <PlayIcon size={18} />
              </span>
              20 courses
            </div>
          </div>
        </div>
      </Card>
    </CarouselItem>
  );
}

export default MainSecond;
