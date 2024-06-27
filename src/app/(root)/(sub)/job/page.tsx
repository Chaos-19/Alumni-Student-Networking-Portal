import ApplyJob from "@/components/forms/apply-job.";
import JobCard from "@/components/job/job-card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { FaComment } from "react-icons/fa";

type Props = {};

const jobPost = [
  {
    img: "/Ellipse 5.png",
    name: "Yordanos Getachew",
    feild: "Chemical Engineering 12",
    title: "Software Engineering",
    type: "Full-Time",
    company: "Company Name",
    location: "Place, Location",
    salaryRange: "Salary: $20,000 - $25,000",
  },
  {
    img: "/Ellipse 5.png",
    name: "Yordanos Getachew",
    feild: "Chemical Engineering 12",
    title: "Software Engineering",
    type: "Full-Time",
    company: "Company Name",
    location: "Place, Location",
    salaryRange: "Salary: $20,000 - $25,000",
  },
  {
    img: "/Ellipse 5.png",
    name: "Yordanos Getachew",
    feild: "Chemical Engineering 12",
    title: "Software Engineering",
    type: "Full-Time",
    company: "Company Name",
    location: "Place, Location",
    salaryRange: "Salary: $20,000 - $25,000",
  },
  {
    img: "/Ellipse 5.png",
    name: "Yordanos Getachew",
    feild: "Chemical Engineering 12",
    title: "Software Engineering",
    type: "Full-Time",
    company: "Company Name",
    location: "Place, Location",
    salaryRange: "Salary: $20,000 - $25,000",
  },
  {
    img: "/Ellipse 5.png",
    name: "Yordanos Getachew",
    feild: "Chemical Engineering 12",
    title: "Software Engineering",
    type: "Full-Time",
    company: "Company Name",
    location: "Place, Location",
    salaryRange: "Salary: $20,000 - $25,000",
  },
  {
    img: "/Ellipse 5.png",
    name: "Yordanos Getachew",
    feild: "Chemical Engineering 12",
    title: "Software Engineering",
    type: "Full-Time",
    company: "Company Name",
    location: "Place, Location",
    salaryRange: "Salary: $20,000 - $25,000",
  },
  {
    img: "/Ellipse 5.png",
    name: "Yordanos Getachew",
    feild: "Chemical Engineering 12",
    title: "Software Engineering",
    type: "Full-Time",
    company: "Company Name",
    location: "Place, Location",
    salaryRange: "Salary: $20,000 - $25,000",
  },
  {
    img: "/Ellipse 5.png",
    name: "Yordanos Getachew",
    feild: "Chemical Engineering 12",
    title: "Software Engineering",
    type: "Full-Time",
    company: "Company Name",
    location: "Place, Location",
    salaryRange: "Salary: $20,000 - $25,000",
  },
];

export default function page({ }: Props) {
  return (
    <section className="border border-red-600">
      <div className="w-full p-2">
        <h2 className="px-5 py-2 text-3xl font-semibold">Job Posts</h2>
        <ScrollArea className="h-screen w-full px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pb-24">
            {[...jobPost].map((post, idx) => (
              <JobCard key={post.name + idx} post={post} />
            ))}
          </div>
        </ScrollArea>
      </div>
      <ApplyJob
        discription=""
        title="Apply For Job"
        users={[]}
        trigger={
          <Button className="fixed bottom-10 right-10 p-5 rounded-full text-white">
            <FaComment size={24} />
          </Button>
        }
      ></ApplyJob>
    </section>
  );
}
