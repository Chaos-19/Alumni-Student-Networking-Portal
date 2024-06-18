import LessionCard from "@/components/lession-card";
import CaroselWrapper from "@/components/admin/carosel";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";
import CourseList from "./course-list";
import Footer from "@/components/footer";

type Props = {};

const lesson = [
    {
        title: "AWS Certified Solutions Architect",
        user: {
            username: "Lina",
            profile_image_url: "/Ellipse 5.png",
        },
        progress: 70,
        coverImg: "/picture.png",
        lessonCompleted: 5,
        totalLesson: 7,
    },
    {
        title: "AWS Certified Solutions Architect",
        user: {
            username: "Lina",
            profile_image_url: "/Ellipse 5.png",
        },
        progress: 70,
        coverImg: "/picture2.png",
        lessonCompleted: 6,
        totalLesson: 7,
    },
    {
        title: "AWS Certified Solutions Architect",
        user: {
            username: "Lina",
            profile_image_url: "/Ellipse 5.png",
        },
        progress: 70,
        coverImg: "/picture3.png",
        lessonCompleted: 3,
        totalLesson: 7,
    },
];



export default function page({ }: Props) {
    return (
        <section>
            <ScrollArea className="h-screen w-full">
                <div className="mt-3 mb-24">
                    <CaroselWrapper>
                        {[...lesson, ...lesson].map((val, idx) => (
                            <LessionCard {...val} key={`${val.user}-${idx}`} />
                        ))}
                    </CaroselWrapper>
                    <div className="flex items-center justify-center h-52 w-full">
                        <div>
                            <Input
                                type="email"
                                placeholder="search..."
                                labelPlacement="outside"
                                endContent={
                                    <Search className="p-1 bg-[#5179EF] text-white rounded-full" />
                                }
                            />
                        </div>
                    </div>
                    <CourseList title="Recommended for you" styles="bg-gray-200" />
                    <CourseList title="Get choice of your course" styles="bg-gray-100" />
                    <CourseList title="The course in personal development" styles="bg-[#9DCCFF]/50 pb-6" />
                    <CourseList title="Student are viewing" styles="" />
                </div>
                <Footer />
            </ScrollArea>
        </section>
    );
}
