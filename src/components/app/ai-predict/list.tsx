import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/common/icons"

export default function ListCoin() {
    return (
        <div >

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Coin</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Predict</TableHead>
                        <TableHead>Change</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <TableRow key={index}>
                            <TableCell className="flex items-center space-x-2">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>BTC</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-bold text-blue-700">Bitcoin</div>
                                    <div className="text-sm ">27,610.42 $</div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-sm ">09/08/2023</div>
                                <div className="text-sm ">07:08:01</div>
                            </TableCell>
                            <TableCell>
                                <div className="text-sm  ">27,610.42 </div>
                            </TableCell>

                            <TableCell>
                                <ChangeBadge percent={-1.69} />
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
