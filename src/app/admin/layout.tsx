import AdminNavBar from "@/components/admin/nav-bar";
import AdminSidebar from "@/components/admin/side-bar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <main className="w-full h-full overflow-y-hidden grid grid-cols-[20%_80%]">
      <AdminSidebar />
      <div className="overflow-y-scroll h-screen bg-gray-200">
        <AdminNavBar />
        {children}
      </div>
    </main>
  );
}
