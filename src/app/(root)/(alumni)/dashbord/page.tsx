import AdminCard from "@/components/admin/card";
import MentorsList from "@/components/admin/mentors-list";
import StatisticView from "@/components/admin/statistic-view";
import FileUploaderTest from "@/components/admin/upload";
import UploadHistory from "@/components/admin/upload-history";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const card = [
  {
    title: "Uploads",
    total: 550,
    date: "12/20/24",
    img: "/Analytics.png",
  },
  {
    title: "Mentee",
    total: 200,
    date: "12/20/24",
    img: "/upload.png",
  },
];

const statistic = [
  {
    persent: 50,
    title: "New Mentee",
  },
  {
    persent: 21,
    title: "Resource Utilization",
  },
  {
    persent: 74,
    title: "Video Retention",
  },
];
const mentors = [
  {
    name: "Ann",
    img: "/ann.png",
  },
  {
    name: "Monica",
    img: "/monica.png",
  },
  {
    name: "John",
    img: "/john.png",
  },
  {
    name: "Mike",
    img: "/mike.png",
  },
  {
    name: "Mia",
    img: "/mia.png",
  },
];

const uploadHistory = [
  {
    reciever: "Tesco Market",
    type: "Video",
    date: "13 Dec 2020",
  },
  {
    reciever: "ElectroMen Market",
    type: "Shopping",
    date: "14 Dec 2020",
  },
  {
    reciever: "Fiorgio Restaurant",
    type: "Food",
    date: "07 Dec 2020",
  },
  {
    reciever: "John Mathew Kayne",
    type: "Sport",
    date: "06 Dec 2020",
  },
  {
    reciever: "Ann Marlin",
    type: "Shopping",
    date: "31 Nov 2020",
  },
];

export default function page({}: Props) {
  return (
    <section>
      <ScrollArea className="w-full h-screen">
        <div className="lg:max-w-screen-xl mx-auto py-5 pb-32 relative">
          <div>
            <div className="">
              <h2 className="text-2xl font-bold capitalize">
                Mentorship Files
              </h2>
              <p className="text-base text-gray-500">
                Upload material for your mentorship program
              </p>
              <div className="grid grid-cols-[60%_40%]">
                <div className="">
                  <div className="">
                    <FileUploaderTest />
                  </div>
                  <div className="border4 border-red-900 flex flex-col gap-5">
                    <h4 className="text-lg font-semibold">Upload History</h4>
                    <UploadHistory data={uploadHistory} />
                  </div>
                </div>
                <div className="p-3 flex flex-col gap-2">
                  <h5 className="flex items-center gap-2 text-xl font-medium">
                    Goals{" "}
                    <Plus
                      size={22}
                      className="bg-yellow-500 rounded-full p-1"
                    />{" "}
                  </h5>
                  <div className="flex items-center gap-3">
                    {card.map((data) => (
                      <AdminCard key={data.title} {...data} />
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 space-y-8">
                    <h4 className="text-xl font-semibold">
                      Outcome Statistics
                    </h4>
                    <div className="w-full flex flex-col justify-center gap-4">
                      {statistic.map((data) => (
                        <StatisticView key={data.title} {...data} />
                      ))}
                    </div>
                  </div>
                  <MentorsList data={mentors} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
