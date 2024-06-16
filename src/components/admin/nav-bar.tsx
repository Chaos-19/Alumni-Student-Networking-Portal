"use client";
import { Avatar, Badge, Input } from "@nextui-org/react";
import { Bell, Search, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const pageTitle: { [key: string]: string } = {
  "/admin": "Dashboard",
  "/admin/mentorship": "Mentorship Program Details",
  "/admin/discussion-thread": "Discussion Board Monitoring",
  "/admin/students": "Add New Student",
  "/admin/alumni": "Add New Alumni",
  "/admin/chat": "Chat",
  "/admin/activity": "Notification and Latest Activity",
};

const AdminNavBar = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="px-5 py-3">
      <nav className="flex items-center gap-4">
        <h2 className="text-3xl font-bold text-[#303972]">
          {pageTitle[pathname]}
        </h2>
        <div className="flex items-center max-w-max gap-5 ms-auto">
          <Input
            placeholder="search"
            startContent={
              <Search className="text-2xl pointer-events-none flex-shrink-0 text-[#4D44B5]" />
            }
          />
          <div className="flex items-center gap-3">
            <Badge content="0" color="primary">
              <Bell size={32} className="text-xl bg-white rounded-full p-1" />
            </Badge>
            <Settings size={32} className="text-xl bg-white rounded-full p-1" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap">
            <h6 className="text-base font-medium text-[#303972]">Jon Doe</h6>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
          <Avatar isBordered name="Jane" />
        </div>
      </nav>
    </div>
  );
};

export default AdminNavBar;
