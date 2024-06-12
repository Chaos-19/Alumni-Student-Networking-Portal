import { Link, Star } from "lucide-react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

const list = [
    "Please read rules before you start working on a platform",
    "Vision & Strategy of Alemhelp",
    "Alemhelp source-code on GitHub",
    "Golang best-practices",
    "Alem.School dashboard",
];

const LefftSide = () => {
    return (
        <Card className="w-full h-max px-5 py-8 rounded-none flex flex-col gap-2">
            <h3 className="text-sm font-normal flex items-center gap-2">
                <Star size={18} color="gray" /> Must-read posts
            </h3>
            <Separator className="" />
            <ul className="list-disc text-[#61B0E8] flex flex-col gap-1 px-10">
                {list.slice(0, 2).map((val, idx) => (
                    <li className="text-xs" key={val + idx}>{val}</li>
                ))}
            </ul>
            <h3 className="text-sm font-normal flex items-center gap-2">
                <Link size={18} color="gray" /> Featured links
            </h3>
            <Separator className="" />
            <ul className="list-disc text-[#61B0E8] flex flex-col gap-1 px-10">
                {list.slice(2).map((val, idx) => (
                    <li className="text-xs" key={val + idx}>{val}</li>
                ))}
            </ul>
        </Card>
    );
};

export default LefftSide;
