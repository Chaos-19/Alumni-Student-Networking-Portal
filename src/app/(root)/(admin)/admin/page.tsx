import PublishBtn from "@/components/admin/publish-btn";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Plus } from "lucide-react";
import React from "react";
import { FaComment } from "react-icons/fa";

type Props = {};

export default function page({ }: Props) {
  return (
    <section>
      <ScrollArea className="w-full h-screen">
        <div className="py-5 pb-32 relative">
          <div>
            <h2 className="text-2xl font-bold capitalize">Mentorship Files</h2>
            <p className="text-base text-gray-500">
              Upload material for your mentorship program
            </p>
          </div>
          <div className="flex flex-col gap-3 my-5">
            <h2 className="text-lg font-medium capitalize">Job description</h2>
            <div className="h-52 border-b-2 border-b-black max-w-xl border bg-gray-200 "></div>
          </div>
          <div>
            <h2 className="text-lg font-semibold capitalize">Skill</h2>
            <Button
              variant="outline"
              className="font-medium px-4 py-1 rounded-full flex items-center gap-1"
            >
              Add skill <Plus size={18} />{" "}
            </Button>
          </div>
          <div className="w-full flex flex-col justify-center gap-2 my-5 ">
            <h2 className="text-lg font-semibold capitalize">
              Screening Questions
            </h2>
            <div className="flex items-center gap-2 flex-wrap max-w-lg">
              {Array.from({ length: 10 }).map((val, key) => (
                <Button
                  variant="outline"
                  className="font-medium px-4 py-1 rounded-full flex items-center gap-1"
                  key={key + "-keyu"}
                >
                  Add skill <Plus size={18} />{" "}
                </Button>
              ))}
            </div>
            <div className="flex flex-col justify-center gap-2">
              <PublishBtn />
            </div>
          </div>
        </div>

      </ScrollArea>
    </section>
  );
}
