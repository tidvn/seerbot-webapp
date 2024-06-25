
import { Icons } from "@/components/common/icons"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Page() {
    return (
        <div className="flex flex-col bg-background">
            {/* <header className="bg-card px-4 py-3 flex items-center justify-between">
                <h1 className="text-lg font-medium">Notifications</h1>
                <Button variant="ghost" size="icon">
                    <Icons.check className="w-5 h-5" />
                    <span className="sr-only">Mark all as read</span>
                </Button>
            </header> */}
            <ScrollArea className="flex-1 p-4 space-y-4">
                <div className="space-y-4">
                    <div className="text-sm font-medium text-muted-foreground">Today</div>
                    <div className="flex items-start gap-4">
                        <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                            <Icons.bell className="w-5 h-5" />
                        </div>
                        <div className="grid gap-1 flex-1">
                            <p className="font-medium">New Message</p>
                            <p className="text-sm text-muted-foreground">You have a new message in your inbox.</p>
                            <Button variant="link" className="text-sm">
                                See more
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                            <Icons.bell className="w-5 h-5" />
                        </div>
                        <div className="grid gap-1 flex-1">
                            <p className="font-medium">Upcoming Appointment</p>
                            <p className="text-sm text-muted-foreground">Your appointment with Dr. Smith is tomorrow at 2pm.</p>
                            <Button variant="link" className="text-sm">
                                See more
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="text-sm font-medium text-muted-foreground">Yesterday</div>
                    <div className="flex items-start gap-4">
                        <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                            <Icons.bell className="w-5 h-5" />
                        </div>
                        <div className="grid gap-1 flex-1">
                            <p className="font-medium">Payment Due</p>
                            <p className="text-sm text-muted-foreground">Your monthly subscription payment is due in 3 days.</p>
                            <Button variant="link" className="text-sm">
                                See more
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="text-sm font-medium text-muted-foreground">Last Week</div>
                    <div className="flex items-start gap-4">
                        <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                            <Icons.bell className="w-5 h-5" />
                        </div>
                        <div className="grid gap-1 flex-1">
                            <p className="font-medium">New Offer</p>
                            <p className="text-sm text-muted-foreground">Check out our latest offer on premium plans.</p>
                            <Button variant="link" className="text-sm">
                                See more
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                            <Icons.bell className="w-5 h-5" />
                        </div>
                        <div className="grid gap-1 flex-1">
                            <p className="font-medium">Delivery Update</p>
                            <p className="text-sm text-muted-foreground">Your order has been shipped and will arrive tomorrow.</p>
                            <Button variant="link" className="text-sm">
                                See more
                            </Button>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}




