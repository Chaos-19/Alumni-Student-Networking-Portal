import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Avatar } from "@nextui-org/react";
import { ChevronRight, Plus } from "lucide-react";
import { Button } from "../ui/button";

const MentorsList = ({ data }: { data: any[] | {}[] }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[80%_20%] gap-2 my-4">
            <Card>
                <CardHeader className="py-2">
                    <CardDescription>
                        <div className="">
                            <h4 className="text-2xl font-medium my-2">New Mentees</h4>
                            <div className="flex items-center gap-2">
                                {data.map((mentor, key) => (
                                    <MentorAvater key={mentor.name + key} {...mentor} />
                                ))}
                                <div className="flex flex-col justify-center gap-2 ml-2">
                                    <Avatar showFallback src="" fallback={<Plus size={20} />} />
                                    <h5 className="text-sm font-medium">Add New</h5>
                                </div>
                            </div>
                        </div>
                    </CardDescription>
                </CardHeader>
            </Card>
            <div className="flex h-full items-end">
                <Button className="rounded-none px-5 text-base">Publish <ChevronRight /></Button>
            </div>
        </div>
    );
};

const MentorAvater = ({ img, name }: { img: string; name: string }) => {
    return (
        <div className="flex flex-col items-center">
            <Avatar isBordered name={name} src={img} />
            <h5 className="text-sm font-medium">{name}</h5>
        </div>
    );
};

export default MentorsList;
