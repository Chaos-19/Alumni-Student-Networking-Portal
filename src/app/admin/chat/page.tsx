import { ChatLayout } from '@/components/chat/chat-layout'
import { Card } from '@/components/ui/card'
import { cookies } from 'next/headers';
import React from 'react'

type Props = {}

export default function page({ }: Props) {

  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;


  return (
    <div className='w-full px-10 py-4'>
      <Card className='h-[calc(100dvh_-_100px)]'>
        <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
      </Card>
    </div>
  )
}