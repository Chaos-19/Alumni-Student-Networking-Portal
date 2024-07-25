"use client";

import React, { useEffect, useState } from "react";
import DiscussionCard from "@/components/discussion/discussion-card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the type for API response
type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  created_at: string;
  updated_at: string;
};

type Reply = {}; // Define if needed

type ApiResponseItem = {
  id: string;
  category: string;
  title: string;
  question: string;
  created_by: string;
  is_published: boolean;
  answered: boolean;
  block_replies: boolean;
  created_at: string;
  updated_at: string;
  user: User;
  replies: Reply[];
};

// Define the type for transformed data
type DiscussionPost = {
  auther: {
    profile: string;
    name: string;
  };
  id: string;
  title: string;
  author: string;
  description: string;
  time: string;
  likes: string;
  comments: string;
  tags: string[];
};

const transformResponseData = (apiData: ApiResponseItem[]): DiscussionPost[] => {
  return apiData.map((item) => ({
    auther: {
      profile: "/Ellipse 5.png", // Use default or user-specific profile image URL
      name: item.user.first_name || "Unknown",
    },
    id: item.id,
    title: item.title,
    author: item.user.first_name || "Unknown",
    description: item.question,
    time: new Date(item.created_at).toLocaleString(),
    likes: "0", // Placeholder value, replace with actual logic if available
    comments: item.replies.length.toString(),
    tags: [item.category],
  }));
};

const DiscussionList = () => {
  const [discussionPosts, setDiscussionPosts] = useState<DiscussionPost[]>([]);

  useEffect(() => {
    const fetchAndTransformData = async () => {
      try {
        const response = await fetch("http://localhost:8081/v1/questions");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (result.ok && Array.isArray(result.data)) {
          const transformedData = transformResponseData(result.data as ApiResponseItem[]);
          setDiscussionPosts(transformedData);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchAndTransformData();
  }, []);

  return (
    <ScrollArea className="h-[535px]">
      <div className="flex flex-col gap-[2px] p-4 pt-0 pb-40">
        {discussionPosts.map((post) => (
          <DiscussionCard key={post.id} post={post} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default DiscussionList;
