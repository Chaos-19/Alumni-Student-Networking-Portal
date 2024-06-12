import NavBar from "@/components/nav-bar";
import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function layout({ children }: Props) {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <NavBar />
            <div className="">{children}</div>
        </div>
    );
}
