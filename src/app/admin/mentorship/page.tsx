"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CircularProgress } from "@nextui-org/react";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoStatsChart } from "react-icons/io5";

// Define types
type Mentorship = {
  id: string;
  name: string;
  description: string;
  skill: string;
  created_at: string;
  uploads: string[];
  links: string[];
  first_name: string;
};

// Function to fetch mentorships
const fetchMentorships = async (): Promise<Mentorship[]> => {
  try {
    const response = await fetch("http://localhost:8081/v1/system/mentorships");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    if (result.ok) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

const MentorshipsPage: React.FC = () => {
  const [mentorships, setMentorships] = useState<Mentorship[]>([]);

  useEffect(() => {
    const loadMentorships = async () => {
      const data = await fetchMentorships();
      setMentorships(data);
    };
    loadMentorships();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
      <ScrollArea className="h-screen w-full px-6">
        {mentorships.map((mentorship) => (
          <Card key={mentorship.id} className="w-full p-6 flex flex-col gap-8 mb-24 mt-6">
            <div className="w-full flex gap-4">
              <video className="w-64 h-44 rounded-xl aspect-video" controls>
                <source src="/Big_Buck_Bunny_Trailer_1080p_5s.mp4" type="video/mp4" />
                <source src="/Big_Buck_Bunny_Trailer_1080p_5s.ogv" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-between w-full">
                <div className="flex flex-col justify-center gap-4 ">
                  <h2 className="text-xl font-bold text-[#303972]">
                    {mentorship.name}
                  </h2>
                  <div>
                    <Button size="sm">publish</Button>
                  </div>
                  <p className="text-sm text-gray-500">{mentorship.description}</p>
                </div>
                <Ellipsis />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <IoStatsChart className="text-[#57AEF5] font-black" size={50} />
                <div className="flex flex-col gap-1">
                  <span className="text-[#303972] font-bold text-xl">1.456</span>
                  <span className="text-gray-500">Total Signups</span>
                </div>
              </div>
              <CircularProgress
                size="lg"
                value={70}
                color="default"
                showValueLabel={true}
              />
            </div>
            <div className="flex w-full items-center gap-5">
              <div className="flex flex-col gap-3">
                <h3 className="text-[#303972] font-bold text-xl">Description</h3>
                <p className="text-gray-500 text-sm">{mentorship.description}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#303972] font-bold text-xl">
                  External Link
                </h3>
                <ul className="text-gray-500">
                  {mentorship.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link}
                        className="text-xs text-[#57AEF5] text-ellipsis"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-end gap-5 mt-20">
              <div className="flex items-center gap-5">
                <Button
                  variant="outline"
                  className="text-[#57AEF5] bordre-[#57AEF5] bg-white"
                >
                  Reject
                </Button>
                <Button className="bg-[#57AEF5] text-white">Approve</Button>
              </div>
            </div>
          </Card>
        ))}
      </ScrollArea>
      <ScrollArea className="h-screen w-full">
        <div className="flex flex-col gap-5 mb-24 mt-6">
          <h3 className="text-[#303972] font-bold text-xl">Uploads</h3>
          <div className="flex flex-col gap-3 h-full">
            {mentorships.flatMap((mentorship) =>
              mentorship.uploads.map((item, index) => (
                <div className="flex gap-2 items-center" key={item + index}>
                  <Image
                    src="/Rectangle 12347.png"
                    width={110}
                    height={80}
                    alt="logo"
                  />
                  <p className="text-[#303972] font-medium text-sm">{item}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default MentorshipsPage;
