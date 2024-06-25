import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/common/icons"
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog"
import Image from "next/image"
export default function page() {
    return (
        <div className="flex flex-col bg-background text-foreground">
            <div className="flex-1 py-8">
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
                            <div>
                                <Dialog >
                                    <DialogTrigger asChild>
                                        <Button variant="outline">
                                            <ReceiptIcon className="mr-2 h-5 w-5" />
                                            Receive
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <div className="flex flex-col items-center justify-center gap-4 py-8">
                                            <Image src="https://generated.vusercontent.net/placeholder.svg" width={200} height={200} alt="QR Code" className="rounded-md" />
                                        </div>
                                        <Button variant="outline">Copy Address</Button>
                                        <DialogClose asChild>
                                            <Button type="button">
                                                Close
                                            </Button>
                                        </DialogClose>
                                    </DialogContent>
                                </Dialog>
                            </div>

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
            </div>
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