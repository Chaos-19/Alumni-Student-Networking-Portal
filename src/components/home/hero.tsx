import React from "react";
import {
    PanelsRightBottom,
    PlayCircle,
    Plus,
    Star,
    Touchpad,
} from "lucide-react";
import { Button } from "../ui/button";
import AvatarList from "../avater-list";
import Image from "next/image";
import { Card } from "../ui/card";
import { FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";

type Props = {};

const Hero = (props: Props) => {
    return (
        <div className="w-full bg-[#E8F6FFB2] py-20 border border-[#57AEF5]">
            <div className="w-full max-w-screen-lg lg:mx-auto flex flex-col md:flex-row items-center lg:justify-around px-2">
                <div className="flex flex-col gap-5">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight leading-10 lg:text-6xl text-wrap">
                        Networking <br className="hidden- lg:block" /> Made Easy with{" "}
                        <br className="hidden lg:block" /> Our Portal
                    </h1>
                    <p className="text-base font-medium lg:w-10/12">
                        Embark on a journey of experience sharing and skill enhancement with
                        our networking portal. Whether you're looking to acquire new
                        expertise or refine existing talents, our diverse range of
                        connections offer an amazing opportunity to do all. Empower yourself
                        today!
                    </p>
                    <div className="flex items-center gap-3">
                        <Button className="bg-[#57AEF5] text-lg text-white px-5 py-6 hover:bg-[#57AEF5]/70 rounded-3xl">
                            Get Started
                        </Button>
                        <Button
                            variant="outline"
                            className="border-[#57AEF5] text-lg text-[#57AEF5] font-semibold bg-[#E8F6FFB2] px-5 py-6 hover:bg-[#57AEF5]/70 rounded-3xl flex items-center gap-2"
                        >
                            Learn More <PlayCircle size={20} />
                        </Button>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <AvatarList />
                        <div className="flex flex-col gap-1 justify-center">
                            <h6 className="text-lg font-bold">10K+ Student and Almuni</h6>
                            <p className="text-sm text-[#57AEF5]">have started connecting</p>
                        </div>
                    </div>
                </div>
                <div className={cn(`h-full w-full py-10 sm:py-0 relative`)} style={{
                    backgroundImage: "url('./landing 1st background.png')"
                }}>

                    <Image
                        src="/landing 1st.png"
                        width={700}
                        height={600}
                        alt=""

                    />
                    <Card className="absolute right-0 lg:-right-14 top-1/2 translate-y-[-50%] px-2 py-5">
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-1 justify-center">
                                <h3 className="text-4xl font-bold text-[#008cff] flex items-center">
                                    10k <Plus size={15} />
                                </h3>
                                <p className="text-xs font-medium text-center">Almuni</p>
                            </div>
                            <div className="flex flex-col justify-center gap-1">
                                <h3 className="text-4xl font-bold text-[#008cff] flex items-center gap-1">
                                    {" "}
                                    <FaStar size={24} className="text-primary" />
                                    4.6
                                </h3>
                                <p className="text-xs font-medium text-center">5k+ reviews</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-4xl font-bold text-[#008cff] flex items-center">
                                    100
                                    <Plus size={15} />
                                </h3>
                                <p className="text-xs font-medium text-center">partnership</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Hero;
