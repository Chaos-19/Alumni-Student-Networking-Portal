import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  /*   DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu, */
  Input,
  Badge,
  Button,
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import { IoIosNotifications } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function NavBar() {
  return (
    <Navbar className="w-full bg-[#61B0E8]">
      <NavbarBrand>
        <Image src="/image.png" width={50} height={50} alt="logo" />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <Link className="text-white" href="/jobs">
            Jobs
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/mentorship" className="text-white">MentorShipe</Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/discussion-forum">
            Discussion Forum
          </Link>
        </NavbarItem>
      </NavbarContent>
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-white dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchIcon size={18} />}
        type="search"
      />

      <NavbarContent as="div" justify="end">
        <Badge content="99+" shape="circle" color="danger">
          <Button
            radius="full"
            isIconOnly
            aria-label="more than 99 notifications"
            variant="light"
          >
            <IoIosNotifications size={32} />
          </Button>
        </Badge>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar
              icon={<AvatarIcon />}
              classNames={{
                base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                icon: "text-black/80",
              }}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </NavbarContent>
    </Navbar>
  );
}
