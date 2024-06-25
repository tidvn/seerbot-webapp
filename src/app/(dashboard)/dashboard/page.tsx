import { DataChart } from '@/components/app/dashboard/chart';
import { HistoryTrading } from '@/components/app/dashboard/history-trading';
import { Icons } from '@/components/common/icons';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  mt-6">
        {/* <div className="flex items-center justify-between space-y-2">
          <h2 className="text-xl font-bold tracking-tight">
            Statistics information
          </h2>
          <Select>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="Day" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Day">Day</SelectItem>
              <SelectItem value="Week">Week</SelectItem>
              <SelectItem value="Month">Month</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
        <div className="space-y-4">
          <div className="grid gap-4 grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  All Trade
                </CardTitle>
                <Icons.allTrade />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">324</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Profit margin
                </CardTitle>
                <Icons.profitMargin />

              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">95%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Win trade</CardTitle>
                <Icons.winTrade />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">305</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Lose trade
                </CardTitle>
                <Icons.loseTrade />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">19</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Highest profit</CardTitle>
                <Icons.highestProfit />

              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-green-500">29,781.6 $</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Lowest profit
                </CardTitle>
                <Icons.lowestProfit />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-red-500">29,781.6 $</div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Statistical graph</CardTitle>
                <div className="flex items-center justify-between space-y-2">
                  <Select>
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder="Bitcoin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bitcoin">bitcoin</SelectItem>
                      <SelectItem value="etherum">etherum</SelectItem>
                      <SelectItem value="solana">solana</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Day">Day</SelectItem>
                      <SelectItem value="Week">Week</SelectItem>
                      <SelectItem value="Month">Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent className="pl-2">
                <DataChart />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>History trading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <HistoryTrading />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
