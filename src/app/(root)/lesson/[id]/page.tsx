import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import {
    FaCamera,
    FaFacebook,
    FaInstagram,
    FaRegFilePdf,
    FaTwitter,
    FaVirus,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa6";

const courseDescription = {
    title: "Machine Learning: Intro to Pro",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    resource: [
        {
            title: "7 lecture videos",
            icon: <FaVirus />,
        },
        {
            title: "5 files",
            icon: <FaCamera />,
        },
        {
            title: "6 readings",
            icon: <FaRegFilePdf />,
        },
    ],
    links: [
        {
            icon: <FaFacebook size={22} />,
            link: "facebook",
        },
        {
            icon: <FaWhatsapp size={22} />,
            link: "whatsapp",
        },
        {
            icon: <FaTwitter size={22} />,
            link: "twitter",
        },
        {
            icon: <FaInstagram size={22} />,
            link: "instagram",
        },
        {
            icon: <FaYoutube size={22} />,
            link: "youtub",
        },
    ],
};

type Props = {};

export default function page({ }: Props) {
    return (
        <section>
            <ScrollArea className="h-screen w-full">
                <div className="mb-24 flex flex-col justify-center items-center max-w-screen-lg mx-auto">
                    <Image src="/header.png" className="w-full rounded-none" />
                    <div className="w-full grid grid-cols-[70%_30%] py-10 gap-2">
                        <div className="flex flex-col justify-center gap-4">
                            <h3 className="text-[#252641] text-3xl font-bold">
                                {courseDescription.title}
                            </h3>
                            <div className="flex flex-col gap-4 ml-16">
                                <h6 className="text-[#252641] text-base font-bold">
                                    Description
                                </h6>
                                <p className="text-lg text-gray-600">
                                    {courseDescription.description}
                                </p>
                                <div className="flex mx-14">
                                    <ul className="list-disc text-base text-gray-600 flex flex-col gap-1">
                                        {courseDescription.list.map((item, idx) => (
                                            <li key={`${"key"}-${idx}`}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <Button className="my-6">Signup</Button>
                            <div className="flex flex-col gap-1 border-y border-gray-500 py-2">
                                <h3 className="text-lg font-black">This Course included</h3>
                                <div className="py-3 px-2">
                                    <ul className="flex flex-col gap-1">
                                        {courseDescription.resource.map((item) => (
                                            <li
                                                key={item.title}
                                                className="flex items-center gap-2 text-sm text-[#49BBBD]"
                                            >
                                                {item.icon}
                                                {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 py-4 border-b border-b-gray-800">
                                <h3 className="text-lg font-black">
                                    Training 5 or more people
                                </h3>
                                <p className="text-xs text-gray-700">
                                    Class, launched less than a year ago by Blackboard co-founder
                                    Michael Chasen, integrates exclusively...
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 py-2">
                                <h3 className="text-lg font-black">Share this course</h3>
                                <div className="flex items-center gap-2">
                                    {courseDescription.links.map((icon, id) => (
                                        <Link href={icon.link} key={`${icon.link}-${id}`}>
                                            {icon.icon}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </section>
    );
}
