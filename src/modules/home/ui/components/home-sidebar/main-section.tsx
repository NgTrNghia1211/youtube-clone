"use client";

import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";

import { 
    SidebarContent, 
    SidebarGroup, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem 
} from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";

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
				auth: true,
    },
    {
        title: "Trending",
        url: "/feed/trending",
        icon: FlameIcon,
    }
]

export const MainSection = () => {
	const clerk  = useClerk();
	const { isSignedIn } = useAuth();
	
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
                            onClick={(e) => {
															if (!isSignedIn && item.auth) {
																e.preventDefault();
																return clerk.openSignIn();
															}

															// TODO: implement later
														}}
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
