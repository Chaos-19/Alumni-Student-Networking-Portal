
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  cn,
} from "@nextui-org/react";
import { Edit2Icon, EllipsisVertical, Trash } from "lucide-react";
import { Switch } from "../ui/switch";



export default function DiscussionDropDown() {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown placement="left-start" backdrop="blur">
      <DropdownTrigger>
        <span>
          <EllipsisVertical />
        </span>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" closeOnSelect={false}>
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
          startContent={<Switch id="airplane-mode" />}
        >
          show comment
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          shortcut="⌘⇧D"
          startContent={
            <Trash className={cn(iconClasses, "text-danger")} />
          }
        >
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
