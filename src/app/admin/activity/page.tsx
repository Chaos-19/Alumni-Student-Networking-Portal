import ActivityCard from "@/components/admin/activity-card";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

type Props = {};

const notification = [
    {
        date: "Monday, June 31 2020",
        notification: [
            {
                date: "Monday, June 31 2020",
                title: 'You have added new user "Alemneh Asnakiew" to Interest group',
                type: "add",
            },
            {
                date: "Monday, June 31 2020",
                title: "Capacity of Fullstack Mentorship Program is almost full",
                type: "alert",
            },
            {
                date: "Monday, June 31 2020",
                title: "Tony Soap commented at Software Discussion thread",
                type: "comment",
            },
            {
                date: "Monday, June 31 2020",
                title: "Samantha William add 4 files on Art Mentorship Program",
                type: "add",
                files: 4,
            },
            {
                date: "Monday, June 31 2020",
                title: 'You have removed "Mechanical Intern" job',
                type: "remove",
            },
        ],
    },
    {
        date: "Sunday, June 30 2020",
        notification: [
            {
                date: "Sunday, June 30 2020",
                title: "Johny Ahmad mentioned you at Electrical Discussion thread",
                type: "mention",
            },
            {
                date: "Sunday, June 30 2020",
                title: "Nadilla Adja mentioned you at Programming Interest Group",
                type: "mention",
            },
        ],
    },
];

export default function page({ }: Props) {
    return (
        <section>
            <ScrollArea className="h-screen w-full px-6">
                <Card className="h-full mt-5 mb-24">
                    <div className="w-full">
                        {notification.map((val, idx) => (
                            <ActivityCard key={val.date} notification={val} />
                        ))}
                    </div>
                </Card>
            </ScrollArea>
        </section>
    );
}
