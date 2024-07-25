"use client";

import React, { useEffect, useState } from "react";
import Qusetions from "./qusetions";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Trophy } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Card } from "@/components/ui/card";

// Define types for API responses and component props
type User = {
  username: string;
  profile_image_url: string;
};

type CommentReply = {
  user: string;
  date: string;
  text: string;
  likes: number;
  replies?: CommentReply[];
};

type Comment = {
  user: User;
  date: string;
  text: string;
  code?: string;
  likes: number;
  dislikes: number;
  replies: CommentReply[];
};

type Question = {
  id: string;
  author: User;
  created_at: string;
  content: string;
  tags: string[];
  likes: number;
  retweets: number;
  replies: number;
  title: string;
  comment: Comment[];
};

// Component to fetch and display a random question
export default function Page() {

  const [questions, setQuestions] = useState<Question | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8081/v1/questions");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        
        if (result.ok && result.data.length > 0) {
          const apiData = result.data[0]; // Assuming you want the first item
          
          // Map API data to Question type
          const transformedData: Question = {
            id: apiData.id,
            author: {
              username: apiData.user.first_name, // Adjust as necessary
              profile_image_url: "/Ellipse 5.png", // Use a default or user-specific image URL
            },
            created_at: apiData.created_at,
            content: apiData.question,
            tags: [apiData.category], // Adjust if necessary
            likes: 0, // Placeholder value
            retweets: 0, // Placeholder value
            replies: apiData.replies.length,
            title: apiData.title,
            comment: [], // Adjust if you have comments
          };

          setQuestions(transformedData);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchQuestions();
  }, []); // Dependency array

  return (
    <div className="overflow-y-hidden">
      <div className="grid grid-cols-[75%_25%] bg-gray-100">
        <ScrollArea className="w-full h-screen pb-20 px-5">
          {questions ? <Qusetions questions={questions} /> : <p>Loading...</p>}
        </ScrollArea>
        <div className="w-full pl-2 pr-8 hidden lg:flex pt-8 justify-center items-start">
          <Card>
            <div className="flex flex-col gap-3 px-10 py-5">
              <Image src="/image-profile.png" width={200} height={200} alt="profile image" />
              <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="font-bold text-base">@morgenshtern</h3>
                <div className="flex justify-center items-center gap-2">
                  <Trophy className="text-yellow-900" /> 125 [8]
                </div>
                <div className="flex justify-center items-center gap-2">
                  {[<FaGithub />, <FaInstagram />, <FaFacebook />].map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
