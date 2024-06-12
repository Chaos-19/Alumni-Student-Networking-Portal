"use client";
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { Subtitles } from "lucide-react";
import React from "react";

type Props = {};

const steps = [
    {
        title: "Section1: Msaleawi Anegager",
        subTitle: "Abeba Desu phd",
    },
    {
        title: "Section2: Msaleawi Anegager",
        subTitle: "Abeba Desu phd",
    },
    {
        title: "Section3: Msaleawi Anegager",
        subTitle: "Abeba Desu phd",
    },
    {
        title: "Section 4: Msaleawi Anegager",
        subTitle: "Abeba Desu phd",
    },
];

const MentorShipContentList = (props: Props) => {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="py-5 px-2 border bg-[#57AEF5] rounded-md pl-6 font-black text-white">Mentorship Content</div>
            <Listbox variant="flat" aria-label="Listbox menu with descriptions">
                {steps.map((val) => (
                    <ListboxItem key={val.title} description={val.subTitle} className="bg-gray-200 py-4 pl-10 relative group">
                        <div className="hidden absolute left-0 top-0 bottom-0 bg-[#57AEF5] w-2 rounded-l-lg group-hover:block" />
                        {val.title}
                    </ListboxItem>
                ))}
            </Listbox>
        </div>
    );
};

export default MentorShipContentList;
