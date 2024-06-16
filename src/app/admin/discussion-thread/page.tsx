import AdminDisscusionCard from "@/components/admin/discussion-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

type Props = {};

const discussions = [
  {
    title: "What is the difference between Java and Javascript?",
    date: "2022-01-01",
    userId: "1",
  },
  {
    title: "What is the difference between Java and Javascript?",
    date: "2022-01-01",
    userId: "1",
  },
  {
    title: "What is the difference between Java and Javascript?",
    date: "2022-01-01",
    userId: "1",
  },
  {
    title: "What is the difference between Java and Javascript?",
    date: "2022-01-01",
    userId: "1",
  },
  {
    title: "What is the difference between Java and Javascript?",
    date: "2022-01-01",
    userId: "1",
  },

  {
    title: "Machine Learning: Beginner to Advanced",
    date: "2022-01-01",
    userId: "1",
  },
  {
    title: "Machine Learning: Beginner to Advanced",
    date: "2022-01-01",
    userId: "1",
  },
];

export default function page({ }: Props) {
  return (
    <ScrollArea className="h-screen w-full px-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-10 mt-5 mb-24">
        {discussions.map((discussion) => (
          <AdminDisscusionCard key={discussion.title} {...discussion} />
        ))}
      </div>
    </ScrollArea>
  );
}
