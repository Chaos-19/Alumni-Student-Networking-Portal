import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Image } from "@nextui-org/react";

type Props = {};

const Testimonial = (props: Props) => {
    return (
        <div className="flex flex-col lg:flex-row px-10 py-5">
            <div className="flex-[0.8] flex flex-col gap-2 justify-center">
                <div className="">
                    <Badge className="bg-[#E8F6FF] text-[#57AEF5] hover:border-[#57AEF5] hover:bg-white">
                        TESTIMONIALS
                    </Badge>
                </div>
                <h3 className="text-4xl font-black">
                    Unlocking Success <br className="hidden lg:block" /> Stories from Our <br className="hidden lg:block" /> Students
                </h3>
                <p className="text-sm font-semibold text-wrap max-w-md">
                    Discover the transformative journey of our students through their
                    testimonials. These stories speak to the impact our courses have had
                    on their professional and personal lives.
                </p>
                <div>
                    <Button
                        variant="outline"
                        className="px-5 py-3 rounded-3xl mt-2 border-2 text-[#57AEF5] border-[#57AEF5] hover:bg-[#57AEF5] hover:text-white"
                    >
                        View More
                    </Button>
                </div>
            </div>
            <div className="flex-1 py-5">
                <div className="w-full flex flex-col gap-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl flex-1"
                        src="/Rectangle 12347.png"
                        height={150}
                    />
                    <div className="flex items-center ">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl md:basis-1/2 lg:basis-1/3"
                            src="/Rectangle 12347.png"
                            height={100}
                        />
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl md:basis-1/2 lg:basis-1/3"
                            src="/Rectangle 12347.png"
                            height={100}
                        />
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl md:basis-1/2 lg:basis-1/3"
                            src="/Rectangle 12347.png"
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
