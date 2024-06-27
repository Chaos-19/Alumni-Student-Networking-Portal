"use client"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUp,
  Eye,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import DiscussionDropDown from "./drop-down";

type Props = {
  post: {
    auther: {
      profile: string;
      name: string;
    };
    id?: number;
    title: string;
    author?: string;
    description?: string;
    time: string;
    likes: string;
    comments: string;
    tags: string[];
    descrion?: string;
  };
};

const DiscussionCard = ({ post }: Props) => {
  return (
    <Card className="rounded-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={post.auther.profile}
              width={40}
              height={40}
              alt="profile pic"
            />
            <div className="flex flex-col justify-center">
              <h6 className="text-base font-normal capitalize">
                {post.auther.name}
              </h6>
              <p className="text-[10px]">{post.time}</p>
            </div>
          </div>
          <DiscussionDropDown />
        </div>
        <CardTitle className="text-base">{post.title}</CardTitle>
        <CardDescription>
          {post.description}
          </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 ">
          <div className="flex items-center gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <p className="text-[10px]">{post.likes}</p>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <p className="text-[10px]">{post.comments}</p>
            </div>
            <div className="flex items-center gap-1">
              <ArrowUp className="h-4 w-4" />
              <p className="text-[10px]">{post.likes}</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DiscussionCard;
