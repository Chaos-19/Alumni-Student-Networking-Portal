import LefftSide from "@/components/discussion/left-side";
import QuestionForm from "@/components/forms/question";
import React from "react";

type Props = {};

export default function page({ }: Props) {
    return (
        <div className="overflow-y-hidden">
            <div className="grid grid-cols-[70%_30%] bg-gray-50 p-5 h-screen">
                <div className="">
                    <QuestionForm />
                </div>
                <div className="w-full pl-2 pr-8 hidden lg:flex pt-8 justify-center">
                    <LefftSide />
                </div>
            </div>
        </div>
    );
}
