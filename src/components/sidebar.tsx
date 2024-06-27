"use client";

import Link from "next/link";
import { MoreHorizontal, Search, SquarePen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Message } from "@/app/data";
import { Badge, Input } from "@nextui-org/react";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

interface SidebarProps {
  isCollapsed: boolean;
  links: {
    name: string;
    messages: Message[];
    avatar: string;
    variant: "grey" | "ghost";
  }[];
  onClick?: () => void;
  isMobile: boolean;
}

export function Sidebar({ links, isCollapsed, isMobile }: SidebarProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="relative group flex flex-col h-screen gap-4 p-2 data-[collapsed=true]:p-2 "
    >
      {!isCollapsed && (
        <div className="flex p-2 flex-col gap-2 justify-center">
          <div className="flex gap-2 items-center text-2xl">
            <p className="font-medium text-[#303972]">Messages</p>
          </div>
          <Input
            type="email"
            placeholder="search..."
            labelPlacement="outside"
            startContent={
              <Search className="p-1 bg-[#5179EF] text-white rounded-full" />
            }
          />
        </div>
      )}
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 h-full">
        <ScrollArea className="h-screen">
          <div className="mb-24 h-[calc(100svh_-_200px)] relative">
            <h4 className="text-lg font-medium text-gray-500">Group</h4>
            {links.map((link, index) =>
              isCollapsed ? (
                <TooltipProvider key={index}>
                  <Tooltip key={index} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "h-11 w-11 md:h-16 md:w-16",
                          link.variant === "grey" &&
                          "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white py-8"
                        )}
                      >
                        <Image
                          src={"/Ellipse 3.png"}
                          alt={link.avatar}
                          width={50}
                          height={50}
                          className=""
                        />
                        <span className="sr-only">{link.name}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="flex items-center gap-4"
                    >
                      {link.name}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Link
                  key={index}
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    link.variant === "grey" &&
                    "shrink",
                    "justify-start gap-4 w-full py-8 border-b border-b-[#57AEF5] rounded-none"
                  )}
                >
                  <Avatar className="flex justify-center items-center">
                    <AvatarImage
                      src={"/Ellipse 3.png"}
                      alt={link.avatar}
                      width={6}
                      height={6}
                      className="w-10 h-10"
                    />
                  </Avatar>
                  <div className="flex flex-col max-w-28">
                    <span>{link.name}</span>
                    {link.messages.length > 0 && (
                      <span className="text-zinc-300 text-xs truncate ">
                        {
                          link.messages[link.messages.length - 1].name.split(
                            " "
                          )[0]
                        }
                        : {link.messages[link.messages.length - 1].message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 ms-auto p-2">
                    <p className="text-sm text-gray-500">12:30 PM</p>
                    <div className="bg-primary text-white w-5 h-5 rounded-full flex justify-center items-centersss justify-self-center" >2</div>
                  </div>
                </Link>
              )
            )}
            <Button variant="outline" className="w-full absolute bottom-0 right-0 left-0">View More</Button>
          </div>
        </ScrollArea>
      </nav>
    </div>
  );
}
