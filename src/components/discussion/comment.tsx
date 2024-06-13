"use client";
import React from "react";
import { Card, CardHeader } from "../ui/card";
import Image from "next/image";
import {
  ChevronsUp,
  CornerDownRight,
  EllipsisVertical,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

import MarkdownPreview from "@uiw/react-markdown-preview/nohighlight";
import { Button } from "../ui/button";
import { Comment, Reply } from "../../../types/question";

interface Props extends Comment {}

const CommentCard = ({
  user,
  likes,
  date,
  text,
  dislikes,
  replies,
}: Comment) => {
  return (
    <>
      <Card className="px-5 rounded  border-l-4 border-l-[#F48023]">
        <CardHeader className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={user.profile_image_url}
                width={40}
                height={40}
                alt="profile pic"
              />
              <div className="flex flex-col justify-center">
                <h6 className="text-base font-normal capitalize">
                  {user.username}
                </h6>
                <p className="text-[10px]">{date}</p>
              </div>
            </div>
            <EllipsisVertical />
          </div>
          <div className="mt-5">
            <MarkdownPreview
              source={text}
              style={{ color: "black", fontSize: "14px", fontStyle: "bold" }}
            />
          </div>
          <div className="flex items-center justify-between border-t-1">
            <div className="flex items-center gap-2">
              <Button
                variant="link"
                className="flex items-center gap-2 text-gray-600"
              >
                <ThumbsUp size={18} /> {likes}
              </Button>
              <Button
                variant="link"
                className="flex items-center gap-2 text-gray-600"
              >
                <ThumbsDown size={18} />
                {dislikes}
              </Button>
            </div>
            <div className="flex items-center gap-2">
              {Boolean(replies.length) && (
                <Button size="sm" variant="link" className="text-blue-800">
                  <ChevronsUp /> Hide All Replies {replies.length}
                </Button>
              )}
              <Button size="sm" variant="link" className="text-blue-800">
                <CornerDownRight /> replie
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
      <Replay postuser={user.username} replies={replies} />
    </>
  );
};

type ReplayProp = {
  replies: Reply[];
  postuser: string;
};

const Replay = ({ postuser, replies }: ReplayProp) => {
  return replies.map((reply) => (
    <>
      <Card className="px-5 rounded  border-l-8 border-l-blue-600">
        <CardHeader className="">
          <div className="mt-5">
            <MarkdownPreview
              source={`**${postuser}** ${reply.text.replace(
                `${postuser},`,
                ""
              )}`}
              style={{ color: "black", fontSize: "14px", fontStyle: "bold" }}
            />
          </div>
          <div className="flex items-center justify-between border-t-1 gap-2">
            <h6 className="text-gray-700">by {reply.user}</h6>
            <Button size="sm" variant="link" className="text-blue-800">
              <CornerDownRight /> replie
            </Button>
          </div>
        </CardHeader>
      </Card>
      { Boolean(reply.replies?.length) && (
          <Replay postuser={reply.user} replies={reply.replies!}  />
        )
      }
    </>
  ));
};

export default CommentCard;
