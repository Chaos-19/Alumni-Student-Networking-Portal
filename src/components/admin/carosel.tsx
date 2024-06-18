import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  styles?: string;
};

const CaroselWrapper = ({ children, styles }: Props) => {
  return (
    <div>
      <Carousel className={cn("w-full ml-auto p-5")}>
        <CarouselContent className="scroll-mx-10 p-10">
          {children}
        </CarouselContent>

        <div className="absolute bottom-[8%] right-20 ">
          <CarouselPrevious className="absolute bottom-0 text-white bg-[#57AEF5] rounded-none" />
          <CarouselNext className=" text-white bg-[#57AEF5] rounded-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default CaroselWrapper;
