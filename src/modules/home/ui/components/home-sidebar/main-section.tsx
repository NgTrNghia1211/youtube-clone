"use client";

import { 
    SidebarContent, 
    SidebarGroup, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem 
} from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";

const items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon,
        auth: true,
    },
    {
        title: "Subscriptions",
        url: "/feed/subscriptions",
        icon: PlaySquareIcon,
    },
    {
        title: "Trending",
        url: "/feed/trending",
        icon: FlameIcon,
    }
]

export const MainSection = () => {
  return (
    <SidebarGroup>
        <SidebarContent>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.url}>
                        <SidebarMenuButton
                            tooltip={item.title}
                            asChild
                            isActive={false}
                            onClick={() => {}}
                        >
                            <Link
                                href={item.url}
                                className="flex items-center gap-4"
                            >
                                <item.icon/>
                                <span className="text-sm">{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarContent> 
    </SidebarGroup>
  )
}
