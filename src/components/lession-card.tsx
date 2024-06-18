import React from "react";
import { Card, CardBody, CardFooter, Image, Progress } from "@nextui-org/react";
import { CarouselItem } from "./ui/carousel";

type Props = {
  title: string;
  user: {
    username: string;
    profile_image_url: string;
  };
  progress: number;
  coverImg: string;
  lessonCompleted: number;
  totalLesson: number;
};

const LessionCard = ({
  title,
  coverImg,
  progress,
  user,
  lessonCompleted,
  totalLesson,
}: Props) => {
  return (
    <CarouselItem className="pl-3 md:basis-1/2 lg:basis-1/3">
      <Card shadow="sm" isPressable className="w-full">
        <CardBody className="overflow-visible p-2">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={title}
            className="w-full object-cover h-[140px]"
            src={coverImg}
          />
        </CardBody>
        <CardFooter className="text-small items-start flex flex-col gap-1.5">
          <h4 className="text-sm text-[#252641] font-medium">{title}</h4>
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              height={40}
              width={40}
              src={user.profile_image_url}
            />
            <p>{user.username}</p>
          </div>
          <div className="flex flex-col justify-center flex-grow w-full py-2 gap-1">
            <Progress
              size="sm"
              classNames={{
                indicator: "bg-[#61B0E8]",
              }}
              aria-label="progress"
              value={progress}
            />
            <div className="flex items-center justify-end">
              <p className="text-[#252641] font-medium">
                Lesson {lessonCompleted} of {totalLesson}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
};

export default LessionCard;
