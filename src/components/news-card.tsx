'use client'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

type Props = {};

const NewsCard = (props: Props) => {
    return (
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt="latest new card"
                    className="w-full object-cover h-[140px]"
                    src="/image2.png"
                />
            </CardBody>
            <CardFooter className="text-small flex-col items-start">
                <h5 className="text-xl font-semibold tracking-tight text-left">
                    Graduation
                </h5>
                <p className="text-sm text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
                    mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                    mattis ligula consectetur, ultrices mauris.
                </p>
            </CardFooter>
        </Card>
    );
};

export default NewsCard;
