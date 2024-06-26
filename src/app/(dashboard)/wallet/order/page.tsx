import { Icons } from "@/components/common/icons"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
export default function page() {
    const transactions = [
        {
            id: "e94d3f11-8c87-4c7b-a107-2b5f9f8664f8",
            coinName: "CHIP",
            boughtAmount: "84.29",
            transactionDate: "6/25/2024, 14:22:03",
            market: "CHIP/ALGO",
            side: "Buy",
            priceAlgo: "0.0185",
            notionalValue: "1.5592",
            fee: "0.001"
        },
        {
            id: "c07f2732-5c38-443e-8b16-5d128e22a1f0",
            coinName: "GORA",
            boughtAmount: "125.87",
            transactionDate: "6/23/2024, 16:45:12",
            market: "GORA/ALGO",
            side: "Sell",
            priceAlgo: "1.1201",
            notionalValue: "141.0887",
            fee: "0.001"
        },
        {
            id: "8a5d5a84-2b79-4c1a-83d1-9a37a2d22b7c",
            coinName: "PEPE",
            boughtAmount: "172.30",
            transactionDate: "6/22/2024, 09:58:34",
            market: "PEPE/ALGO",
            side: "Buy",
            priceAlgo: "1.1201",
            notionalValue: "193.0243",
            fee: "0.001"
        },
        {
            id: "f847e39c-6e1c-475e-ae3b-4c3e4b570a15",
            coinName: "OPUL",
            boughtAmount: "195.21",
            transactionDate: "6/21/2024, 11:30:45",
            market: "OPUL/ALGO",
            side: "Sell",
            priceAlgo: "0.7349",
            notionalValue: "143.4355",
            fee: "0.001"
        },
        {
            id: "82d6e4b9-7d0c-4b33-9f1c-188aa2e5f1d1",
            coinName: "CHIP",
            boughtAmount: "92.15",
            transactionDate: "6/20/2024, 13:55:21",
            market: "CHIP/ALGO",
            side: "Sell",
            priceAlgo: "0.0188",
            notionalValue: "1.7302",
            fee: "0.001"
        },
        {
            id: "6919d9f7-d59e-4cc6-8825-7c3fe0c2d6d8",
            coinName: "GORA",
            boughtAmount: "163.45",
            transactionDate: "6/18/2024, 15:40:09",
            market: "GORA/ALGO",
            side: "Buy",
            priceAlgo: "1.2500",
            notionalValue: "204.3125",
            fee: "0.001"
        },
        {
            id: "73c0d60a-b7e5-47b8-9e4e-7bdfb7f5ea21",
            coinName: "PEPE",
            boughtAmount: "210.78",
            transactionDate: "6/17/2024, 12:05:30",
            market: "PEPE/ALGO",
            side: "Sell",
            priceAlgo: "1.0510",
            notionalValue: "221.7278",
            fee: "0.001"
        },
        {
            id: "f103ea63-0fa5-46e1-9f1a-b0a3458e5fa1",
            coinName: "OPUL",
            boughtAmount: "185.90",
            transactionDate: "6/16/2024, 09:15:47",
            market: "OPUL/ALGO",
            side: "Buy",
            priceAlgo: "0.8500",
            notionalValue: "158.0150",
            fee: "0.001"
        }
    ];
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Order History</h2>
            <div className="space-y-4">
                {transactions.map((transaction, index) => (
                    <Collapsible key={transaction.id}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 bg-muted rounded-md cursor-pointer">
                            <div>
                                <p className="font-medium">{transaction.side === 'Buy' ? `Bought ${transaction.boughtAmount} ${transaction.coinName}` : `Sold ${transaction.boughtAmount} ${transaction.coinName}`}</p>
                                <p className="text-sm">{transaction.transactionDate}</p>
                            </div>
                            <Icons.chevronDown className="w-5 h-5 text-muted-foreground" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3 bg-muted rounded-md">
                            <div className="grid gap-2 text-sm">
                                <div className="flex items-center justify-between">
                                    <div className="font-small">Date</div>
                                    <div>{transaction.transactionDate}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Market</div>
                                    <div>{transaction.market}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Side</div>
                                    <div className={`text-${transaction.side === 'Buy' ? 'green' : 'red'}-500`}>{transaction.side}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Quantity ({transaction.coinName})</div>
                                    <div>{transaction.boughtAmount}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Price (Algo)</div>
                                    <div>{transaction.priceAlgo}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Notional Value (Algo)</div>
                                    <div>{transaction.notionalValue}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Fee (Algo)</div>
                                    <div>{transaction.fee}</div>
                                </div>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </div>
    )
}
