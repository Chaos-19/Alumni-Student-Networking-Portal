import { ChatLayout } from '@/components/chat/chat-layout'
import React from 'react'
import { cookies } from "next/headers";

type Props = {}

export default function page({ }: Props) {
    const layout = cookies().get("react-resizable-panels:layout");
    const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

    return (
        <div className="w-full h-[calc(100dvh_-_80px)]">
            <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
        </div>
    )
}