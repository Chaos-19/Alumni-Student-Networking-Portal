
import { Card } from "@/components/ui/card";
import Qusetions from "./qusetions";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Trophy } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

type Props = {};

const questions = [
  {
    author: {
      username: "Golanginya",
      profile_image_url: "/Ellipse 5.png",
    },
    created_at: "12 November 2020 19:35",
    content:
      "Mi magna sed nec nisl mattis. Magna cursus tincidunt rhoncus imperdiet fermentum pretium, pharetra nisl. Euismod.\n\n```showLineNumbers go\npackage mian\nimport 'fmt'\nfunc main() {\n\tfmt.Println('Hello, world!')\n}\n ``` \nPosuere arcu arcu consectetur turpis rhoncus tellus. Massa, consectetur massa sit fames nulla eu vehicula ullamcorper. Ante sit mauris elementum sollicitudin arcu sit suspendisse pretium. Nisl egestas fringilla justo bibendum.",
    tags: ["java", "javascript", "wtf"],
    likes: 0,
    retweets: 0,
    replies: 0,
    title: "How to patch KDE on FreeBSD?",

    comment: [
      {
        user: {
          username: "@unkind",
          profile_image_url: "/Ellipse 5.png",
        },
        date: "12 November 2020 19:35",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna. Placerat ut adipiscing nulla lectus vulputate massa, scelerisque. Netus nisi nulla placerat dignissim ipsum arcu.\n```\npackage main\n```\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        code: "package main",
        likes: 12,
        dislikes: 3,
        replies: [
          {
            user: "@lazyReplayer",
            date: "12 November 2020 19:35",
            text: "@unkind, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna.",
            likes: 3,
            replies: [
              {
                user: "@unkind",
                date: "12 November 2020 19:35",
                text: "@lazyReplayer, Thanks!",
                likes: 1,
              },
            ],
          },
        ],
      },
      {
        user: {
          username: "@morgenshtern",
          profile_image_url: "/Ellipse 5.png",
        },
        date: "12 November 2020 19:35",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna. Placerat ut adipiscing nulla lectus vulputate massa, scelerisque. Netus nisi nulla placerat dignissim ipsum arcu.",
        likes: 256,
        dislikes: 3,
        replies: [],
      },
      {
        user: {
          username: "@kizaru",
          profile_image_url: "/Ellipse 5.png",
        },
        date: "12 November 2020 19:35",
        text: "Mi ac id faucibus laoreet. Nulla quis in interdum imperdiet. Luctus mollis massa netus.",
        likes: 3,
        dislikes: 3,
        replies: [
          {
            user: "@lazyReplayer",
            date: "12 November 2020 19:35",
            text: "@unkind, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna.",
            likes: 3,
            replies: [
              {
                user: "@unkind",
                date: "12 November 2020 19:35",
                text: "@lazyReplayer, Thanks!",
                likes: 1,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function page({ }: Props) {
  return (
    <div className="overflow-y-hidden">
      <div className="grid grid-cols-[75%_25%] bg-gray-100">
        <ScrollArea className="w-full h-screen pb-20 px-5">
          <Qusetions questions={questions[0]} />
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
                  {
                    [<FaGithub />, <FaInstagram />, <FaFacebook />].map((val, index) => (val))
                  }
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
