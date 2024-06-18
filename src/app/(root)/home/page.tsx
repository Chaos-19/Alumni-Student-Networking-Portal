import Footer from "@/components/footer";
import Carosel from "@/components/home/carosel";
import Hero from "@/components/home/hero";
import MainSecond from "@/components/home/section";
import Testimonial from "@/components/home/testimonial";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PanelsRightBottom } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaRegThumbsUp, FaStar, FaUsers } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";

type Props = {};

const whycard = [
  {
    title: "Diverse Mentorship Programs",
    content:
      "Explore a diverse range of programs tailored to your interests and career goals.",
    icon: <PanelsRightBottom className="text-[#57AEF5]" size={34} />,
  },
  {
    title: "Experts In Every Field",
    content:
      "Explore a diverse range of programs tailored to your interests and career goals.",
    icon: <FaUsers className="text-[#57AEF5]" size={34} />,
  },
  {
    title: "Flexible Schedule",
    content:
      "Explore a diverse range of programs tailored to your interests and career goals.",
    icon: <TbCalendarClock className="text-[#57AEF5]" size={34} />,
  },
  {
    title: "Continuous Support",
    content:
      "Explore a diverse range of programs tailored to your interests and career goals.",
    icon: <FaRegThumbsUp className="text-[#57AEF5]" size={34} />,
  },
];

export default function page({}: Props) {
  return (
    <section className="w-full">
      <div className="h-screen">
        <div className="mb-28 overflow-y-scroll h-screen">
          <Hero />
          <div className="w-full py-10 border-t-1 border-[#232424]">
            <h3 className="text-3xl font-black px-10 ">
              More than <span className="text-[#57AEF5]">10+</span> universities{" "}
              <br className="hidden lg:block" /> collaborate with us
            </h3>
            <div className="flex flex-col md:flex-row md:items-center my-8 px-10">
              <div
                className={cn(
                  `bg-contain bg-center bg-no-repeat h-full w-full relative`
                )}
              >
                <Image
                  src="/landing 1st background.png"
                  width={500}
                  height={550}
                  alt=""
                />
                <Image
                  src="/landing 2nd.png"
                  width={500}
                  height={500}
                  alt=""
                  className="absolute top-1/2 left-[40%] translate-x-[-40%] translate-y-[-50%] bg-cover"
                />
              </div>
              <div className="w-full flex justify-normal flex-col gap-1.5">
                <div>
                  <Badge className="bg-[#E8F6FF] text-[#57AEF5] hover:border-[#57AEF5] hover:bg-white">
                    WHY CHOOSE US
                  </Badge>
                </div>
                <h3 className="text-3xl font-black">
                  More than <span className="text-[#57AEF5]">10+</span>{" "}
                  universities <br className="hidden lg:block" /> collaborate
                  with us
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-10">
                  {whycard.map((data) => (
                    <CardSer {...data} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row  md:items-end p-10">
            <div className="flex flex-col gap-2 justify-center flex-1">
              <div className="">
                <Badge className="bg-[#E8F6FF] text-[#57AEF5] hover:border-[#57AEF5] hover:bg-white">
                  POPULAR COURSE
                </Badge>
              </div>
              <h3 className="text-4xl font-black">
                Find Our Favorite <br className="hidden lg:block" /> Mentorship
                Programs
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">
                Embark on transformative learning journeys with our most
                sought-after programs. Join a thriving community of knowledge
                seekers who have elevated their skills and careers. From
                cutting-edge technology to timeless business strategies, find
                the path that suits your aspirations.
              </p>
            </div>
          </div>
          <div className="w-full px-10">
            <Carosel />
          </div>
          <div>
            <MainSecond />
          </div>
          <Testimonial />
          <div className="m-10 flex flex-col md:flex-row lg:items-center bg-contain bg-no-repeat  bg-[#57AEF5]/10 rounded-3xl">
            <div
              className=""
              style={{
                backgroundImage: "url('/landing 1st background.png')",
              }}
            >
              <Image
                alt="Card background"
                className="object-cover rounded-xl md:basis-1/2 lg:basis-1/3"
                src="/bottom.png"
                width={620}
                height={400}
              />
            </div>
            <div className="flex flex-col gap-8 px-10">
              <h3 className="text-4xl font-black">
                Join a Mentorship <br className="hidden lg:block" /> Program
                Today!
              </h3>{" "}
              <div>
                <Button className="bg-[#57AEF5] text-lg text-white px-5 py-6 hover:bg-[#57AEF5]/70 rounded-3xl">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}

function CardSer({
  icon,
  content,
  title,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div>{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}
