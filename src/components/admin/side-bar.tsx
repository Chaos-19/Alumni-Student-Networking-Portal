"use client";
import { Activity, Home } from "lucide-react";
import Link from "next/link";;
import { PiChatsThin } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FaUserTie } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";

type Props = {};

const menu = [
  {
    label: "Dashboard",
    icon: <Home />,
    link: "/admin",
  },
  {
    label: "Mentorship",
    icon: <FaChalkboardTeacher />,
    link: "/admin/mentorship",
  },
  {
    label: "Discussion Thread",
    icon: <PiChatsThin />,
    link: "/admin/discussion-thread",
  },
  {
    label: "Students",
    icon: <IoPersonSharp />,
    link: "/admin/students",
  },
  {
    label: "Alumni",
    icon: <FaUserTie />,
    link: "/admin/alumni",
  },
  {
    label: "Chat",
    icon: <IoIosChatboxes />,
    link: "/admin/chat",
  },
  {
    label: "Lastest Activity",
    icon: <Activity />,
    link: "/admin/activity",
  },
];

const AdminSidebar = (props: Props) => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="w-full h-full bg-[#57AEF5]">
      <aside className="h-screen" aria-label="Sidebar">
        <Link
          href={"/admin"}
          className="flex items-center justify-center my-10 gap-2 text-white"
        >
          <Image width={50} height={50} src="/bdu logo.png" alt="logo" />
          <span className="text-3xl font-black text-white">BDU</span>
        </Link>
        <div className="h-full py-4 overflow-y-auto">
          <ul className="font-medium pl-10 flex flex-col gap-3 justify-center">
            {menu.map((item) => (
              <li
                key={item.label}
                className={cn(
                  "rounded-l-full px-3",
                  pathname === item.link && "bg-white text-[#57AEF5]"
                )}
              >
                <Link href={item.link} className={cn("flex items-center gap-4 p-2")}>
                  <span
                    className={cn(
                      pathname === item.link ? "text-[#57AEF5]" : "text-white"
                    )}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={cn(
                      "ms-3 text-base font-medium",
                      pathname === item.link ? "text-[#57AEF5]" : "text-white"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
