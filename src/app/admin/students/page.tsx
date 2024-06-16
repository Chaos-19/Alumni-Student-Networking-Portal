import AddStudent from "@/components/admin/add-student";
import FileUploaderTest from "@/components/alumni/upload";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <ScrollArea className="h-screen w-full px-6">
      <div className="w-full">
        <AddStudent />
      </div>
    </ScrollArea>
  );
}
