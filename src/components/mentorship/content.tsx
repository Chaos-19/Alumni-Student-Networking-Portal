"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type Props = {};

const menu = [
    {
        label: "Overview"
    },
    {
        label: "Q&A"
    },
    {
        label: "Notes"
    },
    {
        label: "Resources"
    },
    {
        label: "Announcement"
    },
    {
        label: "Resources"
    },
]

const Content = (props: Props) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    menu.map((item) => (
                        <NavigationMenuItem key={item.label}>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {item.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Content;
