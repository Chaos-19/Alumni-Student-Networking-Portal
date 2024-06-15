"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {}

const pageTitle: { [key: string]: string } = {
    "/admin": "Dashboard",
    "/admin/mentorship": "Mentorship Program Details",
    "/admin/discussion-thread": "Discussion Board Monitoring",
    "/admin/students": "Add New Student",
    "/admin/alumni": "Add New Alumni",
    "/admin/chat": "Chat",
    "/admin/activity": "Notification and Latest Activity",
}

const AdminNavBar = (props: Props) => {

    const pathname = usePathname();

    return (
        <div>
            <h2 className='text-3xl font-black text-[#303972]'>{pageTitle[pathname]}</h2>
        </div>
    )
}

export default AdminNavBar