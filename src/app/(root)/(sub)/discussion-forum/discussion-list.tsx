import React from "react";
import { disscutionPost } from "../../../../../data";
import DiscussionCard from "@/components/discussion/discussion-card";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {};

const DiscussionList = (props: Props) => {
  return (
    <ScrollArea className="h-[535px]">
      <div className="flex flex-col gap-[2px] p-4 pt-0 pb-40">
        {[...disscutionPost].map((post, key) => (
          <DiscussionCard key={post.title + key} post={post} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default DiscussionList;
