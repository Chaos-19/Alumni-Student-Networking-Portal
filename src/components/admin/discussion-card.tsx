import React from "react";
import { Card } from "../ui/card";
import { Calendar } from "lucide-react";
import { FaPerson } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { Button } from "../ui/button";

type Props = {
    title: string;
    date: string;
    userId: string;
};

const AdminDisscusionCard = ({ title, date, userId }: Props) => {
    return (
        <Card className="w-full border-l-[15px] p-6 border-l-[#57AEF5]">
            <div className="flex flex-col gap-5">
                <h2 className="text-base font-bold text-[#303972]">{title}</h2>
                <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Calendar color="#F6C41C" />
                            <span className="text-sm text-gray-500">{date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoPerson color="#F6C41C" />
                            <span className="text-sm text-gray-500">{userId}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" className="text-[#57AEF5] border-[#57AEF5] border">Remove</Button>
                        <Button size="sm">View</Button>
                    </div>
                </div>

            </div>
        </Card>
    );
};

export default AdminDisscusionCard;
