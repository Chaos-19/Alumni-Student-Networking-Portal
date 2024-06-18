import CouserCard from "@/components/couser-card";
import { cn } from "@/lib/utils";
import React from "react";


const couseList = [
    {
        title: "AWS Certified Solutions Architect",
        instructor: {
            username: "Lina",
            profile_image_url: "/Ellipse 5.png",
        },
        coverImg: "/picture.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        time: "3month",
        price: {
            original: 100,
            discount: 80,
        },
    },
    {
        title: "AWS Certified Solutions Architect",
        instructor: {
            username: "Lina",
            profile_image_url: "/Ellipse 5.png",
        },
        coverImg: "/picture.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        time: "3month",
        price: {
            original: 100,
            discount: 80,
        },
    },
    {
        title: "AWS Certified Solutions Architect",
        instructor: {
            username: "Lina",
            profile_image_url: "/Ellipse 5.png",
        },
        coverImg: "/picture.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        time: "3month",
        price: {
            original: 100,
            discount: 80,
        },
    },
    {
        title: "AWS Certified Solutions Architect",
        instructor: {
            username: "Lina",
            profile_image_url: "/Ellipse 5.png",
        },
        coverImg: "/picture.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        time: "3month",
        price: {
            original: 100,
            discount: 80,
        },
    },
];
type Props = {
    title: string;
    styles?: string
};

export default function CourseList({ title, styles }: Props) {
    return (
        <div className={cn("w-full  px-8 py-5", styles)}>
            <div className="w-full flex items-center justify-between py-8 pr-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                <span className="text-sm text-[#49BBBD] font-medium">See all</span>
            </div>
            <div className="flex items-center gap-2 w-full py-3">
                {couseList.map((course, idx) => (
                    <CouserCard key={`${course.title}idx-${idx}`} {...course} />
                ))}
            </div>
        </div>
    );
}
