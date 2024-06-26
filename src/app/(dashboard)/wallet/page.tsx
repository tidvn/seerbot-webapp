"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/common/icons"
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog"
import Image from "next/image"
import { listcoin } from "@/constants/data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import useSWR from 'swr'
// import { getWalletInformation } from "@/services"
// import { useTelegram } from "@/hooks/useTelegram"
// import Loading from "@/components/common/Loading"
export default function page() {
    const AlgorandPrice = 0.1421
    const totalAlgo = listcoin.reduce((acc, coin) => acc + coin.amount * coin.priceAlgo, 0).toFixed(2)
    const totalUSD = listcoin.reduce((acc, coin) => acc + coin.amount * coin.priceAlgo * AlgorandPrice, 0).toFixed(2)
    return (
        <div className="flex flex-col bg-background text-foreground">
            <div className="flex-1 py-8">
                <div className=" mx-auto grid gap-8">
                    <div className="grid gap-4">
                        <div className="bg-card rounded-lg p-6 flex flex-col items-center justify-center">
                            <div className="text-4xl font-bold">
                                <Icons.algorand className="h-6 w-6 inline-block mr-2 mb-1" />
                                {totalAlgo}</div>
                            <div>$ {totalUSD}</div>

                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <Button variant="outline">
                                <Icons.send className="mr-2 h-5 w-5" />
                                Withdraw
                            </Button>
                            <div>
                                <Dialog >
                                    <DialogTrigger asChild>
                                        <Button variant="outline">
                                            <Icons.receipt className="mr-2 h-5 w-5" />
                                            Receive
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <div className="flex flex-col items-center justify-center gap-4 py-8">
                                            <Image src="/qr.svg" width={200} height={200} alt="QR Code" className="rounded-md" />
                                            <p>5EO2DTJVIJ...HNZNNA</p>
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
                            {listcoin.map((coin) => (
                                <div key={coin.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                            <Avatar>
                                                <AvatarImage src={`https://asa-list.tinyman.org/assets/${coin.id}/icon.png`} />
                                                <AvatarFallback>{coin.unit}</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div>
                                            <p className="font-medium">{coin.name}</p>
                                            <p className="text-muted-foreground">{coin.amount} {coin.unit}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium "><Icons.algorand className="h-3 w-3 inline-block mr-1 mb-1" />{(coin.amount * coin.priceAlgo).toFixed(2)}</p>
                                        <p className="text-muted-foreground">${(coin.amount * coin.priceAlgo * AlgorandPrice).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
