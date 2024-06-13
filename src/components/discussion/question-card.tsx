"use client";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { ArrowUp, EllipsisVertical } from "lucide-react";

import MarkdownPreview from '@uiw/react-markdown-preview/nohighlight';
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { QuestionPostType } from "../../../types/question";




const QuestionCard = ({ author, content, created_at, tags, title }: QuestionPostType) => {
  return (
    <Card className="px-5 py-6 rounded">
      <CardHeader className="gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={author.profile_image_url}
              width={40}
              height={40}
              alt="profile pic"
            />
            <div className="flex flex-col justify-center">
              <h6 className="text-base font-normal capitalize">
                {author.username}
              </h6>
              <p className="text-[10px]">{created_at}</p>
            </div>
          </div>
          <EllipsisVertical />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="mt-5">
          <MarkdownPreview source={content} style={{ color: "black", fontSize: "14px", fontStyle: "bold" }} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded">{tag}</Badge>
            ))}
          </div>
          <Button size="sm" className="flex items-center gap-3.5 rounded-small bg-blue-800 text-white hover:bg-blue-700"><ArrowUp size={15} /> vote</Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default QuestionCard;
