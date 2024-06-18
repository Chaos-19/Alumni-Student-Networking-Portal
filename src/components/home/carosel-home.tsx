import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Button } from "../ui/button";

type Props = {};

const list = [
  "All Category",
  "Art and Creativity",
  "Language and Communication",
  "Technology and IT",
  "Personal Development",
  "Finance and Investment",
];

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

const Carosel = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-end flex-wrap gap-2">
        {list.map((val) => (
          <Badge
            variant="outline"
            className="border-slate-500 text-slate-400 text-base px-2"
            key={val}
          >
            {val}
          </Badge>
        ))}
      </div>
      <div className="flex items-center gap-3 pr-5 py-5">
        <CaroselWrapper styles="max-w-screen-lg">
          {[...carosels, ...carosels].map((_, index) => (
            <CaroselCard key={_.title} {..._} />
          ))}
        </CaroselWrapper>
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
    <CarouselItem className="pl-3 md:basis-1/2 lg:basis-1/3">
      <Card className="py-4 m-3 max-w-md">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={img}
            width={270}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="flex items-center gap-3">
            <div>
              <h4 className="text-sm font-extrabold line-clamp-2 ">{title}</h4>
            </div>
            <div className="text-[#57AEF5]">
              <p className="font-bold">${priceOriginal}</p>
              <p className="text-sm line-through text-gray-500">${discount}</p>
            </div>
          </div>
          <p>{session}</p>
        </CardBody>
      </Card>
    </CarouselItem>
  );
}

export default Carosel;
