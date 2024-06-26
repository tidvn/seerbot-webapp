import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/common/icons"

export default function ListCoin() {
    const data = [
        {
            id: 388592191,
            name: "Chips",
            unit: "CHIP",
            currentPrice: 0.01849,
            predictPrice: 0.01838,
            change: -0.59,
        },
        {
            id: 470842789,
            name: "Defly Token",
            unit: "DEFLY",
            currentPrice: 0.01039,
            predictPrice: 0.01035,
            change: -0.35,
        },
        {
            id: 1237529510,
            name: "Polkagold",
            unit: "PGOLD",
            currentPrice: 0.9242,
            predictPrice: 1.0368,
            change: 12.18,
        },
        {
            id: 287867876,
            name: "Opulous",
            unit: "OPUL",
            currentPrice: 0.7200,
            predictPrice: 0.7148,
            change: -0.71,
        },
        {
            id: 796425061,
            name: "Coop Coin",
            unit: "COOP",
            currentPrice: 0.1917,
            predictPrice: 0.1925,
            change: 0.41,
        }
        ,
        {
            id: 1138500612,
            name: "GORA",
            unit: "GORA",
            currentPrice: 1.148,
            predictPrice: 1.139,
            change: -2.4,
        }
        ,
        {
            id: 452399768,
            name: "Vote Coin",
            unit: "Vote",
            currentPrice: 0.1626,
            predictPrice: 0.1623,
            change: -0.17,
        }
        ,
        {
            id: 1096015467,
            name: "Pepe",
            unit: "PEPE",
            currentPrice: 0.00009,
            predictPrice: 0.00009,
            change: 0.08,
        }

    ]
    return (
        <div >

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Token</TableHead>
                        <TableHead>Predict</TableHead>
                        <TableHead>Change</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((coin, index) => (
                        <TableRow key={index}>
                            <TableCell className="flex items-center space-x-2">
                                <Avatar>
                                    <AvatarImage src={`https://asa-list.tinyman.org/assets/${coin.id}/icon.png`} />
                                    <AvatarFallback>{coin.unit}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-bold text-blue-700">{coin.name}</div>
                                    <div className="text-sm">{coin.currentPrice}</div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-sm  ">{coin.predictPrice}</div>
                            </TableCell>

                            <TableCell>
                                <ChangeBadge percent={coin.change} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

function ChangeBadge({ percent }: { percent: number }) {
    if (percent < 0) {
        return (
            <Badge variant="default" className="bg-red-200 text-red-600">
                <span className="flex items-center space-x-1">
                    <Icons.arrowDown className="h-4 w-4" />
                    <span>{percent}%</span>
                </span>
            </Badge>
        )
    } else {
        return (
            <Badge variant="secondary" className="bg-green-200 text-green-600">
                <span className="flex items-center space-x-1">
                    <Icons.arrowUp className="h-4 w-4" />
                    <span>{percent}%</span>
                </span>
            </Badge>
        )
    }
}
