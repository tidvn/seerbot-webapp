
import { Icons } from "@/components/common/icons"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";

export default function Page() {
    const data = [
        {
            date: "Today",
            notifications: [
                {
                    icon: <Icons.botmessagesquare className="w-5 h-5" />,
                    title: "Ai Predictions",
                    description: "The price forecast for the next hour is available. Check out the trend predicted by AI.",
                    linkText: "/ai-predict"
                },
                {
                    icon: <Icons.BringToFront className="w-5 h-5" />,
                    title: "Ai Swap",
                    description: "Successful execution: Automatic buy order for 84.29 CHIP at a price 1.5592 Algo.",
                    linkText: "/wallet/order"
                }
            ]
        },
        {
            date: "Yesterday",
            notifications: [
                {
                    icon: <Icons.wallet className="w-5 h-5" />,
                    title: "Wallet Notification",
                    description: "Successfully deposited 400 Algo from AACCD...TEN4A.",
                    linkText: "/wallet"
                }
            ]
        },
        {
            date: "2026/06/25",
            notifications: [
                {
                    icon: <Icons.botmessagesquare className="w-5 h-5" />,
                    title: "Ai Predictions",
                    description: "The price forecast for the next hour is available. Check out the trend predicted by AI.",
                    linkText: "/ai-predict"
                },
                {
                    icon: <Icons.botmessagesquare className="w-5 h-5" />,
                    title: "Ai Predictions",
                    description: "The price forecast for the next hour is available. Check out the trend predicted by AI.",
                    linkText: "See more"
                },
            ]
        }
    ];

    return (
        <div className="flex flex-col bg-background">
            <ScrollArea className="flex-1 p-4 space-y-4">
                {data.map((group, groupIndex) => (
                    <div key={groupIndex} className="space-y-4">
                        <div className="text-sm font-medium text-muted-foreground">{group.date}</div>
                        {group.notifications.map((notification, notifIndex) => (
                            <div key={notifIndex} className="flex items-start gap-4">
                                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                                    {notification.icon}
                                </div>
                                <div className="grid gap-1 flex-1">
                                    <p className="font-medium">{notification.title}</p>
                                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                                    <Link href={notification.linkText} className="flex items-center justify-center">
                                        <Button variant="link" className="text-sm">
                                            See More
                                        </Button>
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </ScrollArea>
        </div>
    )
}




