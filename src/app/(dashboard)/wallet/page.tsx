import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/common/icons"

export default function page() {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <header className="border-b bg-card py-3">
                <div className="mx-auto flex items-center justify-between">
                    <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
                        <WalletIcon className="h-6 w-6" />
                        <span>My Wallet</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Icons.bell className="h-5 w-5" />
                            <span className="sr-only">Notifications</span>
                        </Button>
                    </div>
                </div>
            </header>
            <main className="flex-1 py-8">
                <div className=" mx-auto grid gap-8">
                    <div className="grid gap-4">
                        <div className="bg-card rounded-lg p-6 flex flex-col items-center justify-center">
                            <div className="text-4xl font-bold">
                                <Icons.algorand className="h-5 w-5 inline-block mr-2" />
                                5,432.67</div>
                            <div className="text-sm">$ 5,64</div>

                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <Button variant="outline">
                                <SendIcon className="mr-2 h-5 w-5" />
                                Send
                            </Button>
                            <Button variant="outline">
                                <ReceiptIcon className="mr-2 h-5 w-5" />
                                Receive
                            </Button>
                            <Link href="/wallet/order" >
                                <Button variant="outline">
                                    <Icons.order className="mr-2 h-5 w-5" />
                                    Order
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-lg bg-card p-6 shadow">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold">Assets</h2>
                            <Button variant="outline" size="sm">
                                View all
                            </Button>
                        </div>
                        <div className="mt-4 grid gap-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <BitcoinIcon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Bitcoin</p>
                                        <p className="text-muted-foreground">0.5 BTC</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-green-500">+$15,000.00</p>
                                    <p className="text-muted-foreground">$30,000.00</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-green-50">
                                        <EclipseIcon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Ethereum</p>
                                        <p className="text-muted-foreground">2.0 ETH</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-green-500">+$4,000.00</p>
                                    <p className="text-muted-foreground">$2,000.00</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <BitcoinIcon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Litecoin</p>
                                        <p className="text-muted-foreground">10.0 LTC</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-green-500">+$1,000.00</p>
                                    <p className="text-muted-foreground">$100.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function BitcoinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
        </svg>
    )
}


function EclipseIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a7 7 0 1 0 10 10" />
        </svg>
    )
}


function MailsIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="13" x="6" y="4" rx="2" />
            <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
            <path d="M2 8v11c0 1.1.9 2 2 2h14" />
        </svg>
    )
}


function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function ReceiptIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 17.5v-11" />
        </svg>
    )
}


function SendIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}


function SettingsIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function WalletIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
    )
}