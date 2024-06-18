import React from "react";
import { Card, CardBody, CardFooter, Image, Progress } from "@nextui-org/react";
import { Clock3, LayoutGrid } from "lucide-react";

type Props = {
    title: string;
    instructor: {
        username: string;
        profile_image_url: string;
    };
    description: string;
    coverImg: string;
    time: string;
    price: {
        original: number;
        discount: number;
    };
};

const CouserCard = ({
    title,
    coverImg,
    instructor,
    time,
    description,
    price,
}: Props) => {
    return (
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
            <CardFooter className="text-small items-start flex flex-col gap-2 py-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1 text-gray-400">
                        <LayoutGrid />
                        <span>Design</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                        <Clock3 />
                        <span>{time}</span>
                    </div>
                </div>
                <h4 className="text-lg text-[#252641] font-medium">{title}</h4>
                <p className="text-base  font-medium text-gray-700 text-start">
                    {description}
                </p>
                <div className="flex items-center justify-between gap-2 w-full pb-5">
                    <div className="flex items-center justify-end">
                        <Image
                            className="rounded-full"
                            height={60}
                            width={60}
                            src={instructor.profile_image_url}
                        />
                        <p>{instructor.username}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-gray-400 line-through text-base">
                            ${price.original}
                        </span>
                        <span className="text-[#49BBBD] font-bold text-lg">
                            ${price.discount}
                        </span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default CouserCard;
