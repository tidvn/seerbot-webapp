import { Icons } from "@/components/common/icons"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
export default function page() {
    const transactions = [
        {
            date: "June 15, 2023",
            amount: "$49.99",
            merchant: "Acme Supplies",
            category: "Office Supplies",
            notes: "Purchased new desk organizer",
        },
        {
            date: "June 15, 2023",
            amount: "$49.99",
            merchant: "Acme Supplies",
            category: "Office Supplies",
            notes: "Purchased new desk organizer",
        },
        {
            date: "June 15, 2023",
            amount: "$49.99",
            merchant: "Acme Supplies",
            category: "Office Supplies",
            notes: "Purchased new desk organizer",
        },
        {
            date: "June 15, 2023",
            amount: "$49.99",
            merchant: "Acme Supplies",
            category: "Office Supplies",
            notes: "Purchased new desk organizer",
        },
        {
            date: "June 15, 2023",
            amount: "$49.99",
            merchant: "Acme Supplies",
            category: "Office Supplies",
            notes: "Purchased new desk organizer",
        },
    ]
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Transaction History</h2>
            <div className="space-y-4">
                {transactions.map((transaction, index) => (<Collapsible key={index}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 bg-muted rounded-md cursor-pointer">

                        <div>
                            <p className="font-medium">Bought 28,1 chips</p>
                            <p className="text-sm">4/10/2024, 15:10:18</p>
                        </div>
                        <Icons.chevronDown className="w-5 h-5 text-muted-foreground" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-3 bg-muted rounded-md">
                        <div className="grid gap-2 text-sm">
                            <div className="flex items-center justify-between">
                                <div className="font-small">Date</div>
                                <div>April 10, 2024 at 3:10:18 PM</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-muted-foreground">Market</div>
                                <div>Chips/Algo</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-muted-foreground">Side</div>
                                <div className={`text-green-500`} >Buy</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-muted-foreground">Quantity (Chips)</div>
                                <div >28.10</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-muted-foreground">Price (Algo)</div>
                                <div >0.8432</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-muted-foreground">Notional Value (Algo)</div>
                                <div >23.6939</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-muted-foreground">Fee (Algo)</div>
                                <div >0.04</div>
                            </div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
                ))}
            </div>
        </div>
    )
}
