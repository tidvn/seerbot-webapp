import { DataChart } from '@/components/app/portfolio/chart';
import { RecentSales } from '@/components/common/recent-sales';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
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
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  All Trade
                </CardTitle>


                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5 text-muted-foreground">
                  <path d="M7.49945 15.2495C7.30945 15.2495 7.11945 15.1795 6.96945 15.0295C6.67945 14.7395 6.67945 14.2595 6.96945 13.9695L10.1695 10.7695C10.3295 10.6095 10.5395 10.5295 10.7695 10.5495C10.9895 10.5695 11.1895 10.6895 11.3195 10.8795L12.4095 12.5195L15.9595 8.96945C16.2495 8.67945 16.7295 8.67945 17.0195 8.96945C17.3095 9.25945 17.3095 9.73945 17.0195 10.0295L12.8195 14.2295C12.6595 14.3895 12.4495 14.4695 12.2195 14.4495C11.9995 14.4295 11.7995 14.3095 11.6695 14.1195L10.5795 12.4795L8.02945 15.0295C7.87945 15.1795 7.68945 15.2495 7.49945 15.2495Z" fill="#1A64F0" />
                  <path d="M16.5 12.25C16.09 12.25 15.75 11.91 15.75 11.5V10.25H14.5C14.09 10.25 13.75 9.91 13.75 9.5C13.75 9.09 14.09 8.75 14.5 8.75H16.5C16.91 8.75 17.25 9.09 17.25 9.5V11.5C17.25 11.91 16.91 12.25 16.5 12.25Z" fill="#1A64F0" />
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#1A64F0" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">324</div>
                {/* <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Profit margin
                </CardTitle>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5 text-muted-foreground"
                >
                  <path d="M9.5 2H15.5C20.5 2 22.5 4 22.5 9V15C22.5 20 20.5 22 15.5 22H9.5C4.5 22 2.5 20 2.5 15V9C2.5 4 4.5 2 9.5 2Z" stroke="#1A64F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.07031 15.2704L15.6103 8.73047" stroke="#1A64F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.48001 10.3701C10.1593 10.3701 10.71 9.81948 10.71 9.14017C10.71 8.46086 10.1593 7.91016 9.48001 7.91016C8.8007 7.91016 8.25 8.46086 8.25 9.14017C8.25 9.81948 8.8007 10.3701 9.48001 10.3701Z" stroke="#1A64F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.019 16.0909C16.6984 16.0909 17.2491 15.5402 17.2491 14.8608C17.2491 14.1815 16.6984 13.6309 16.019 13.6309C15.3397 13.6309 14.7891 14.1815 14.7891 14.8608C14.7891 15.5402 15.3397 16.0909 16.019 16.0909Z" stroke="#1A64F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">95%</div>
                {/* <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Win trade</CardTitle>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5 text-muted-foreground">
                  <path d="M7.49945 15.2495C7.30945 15.2495 7.11945 15.1795 6.96945 15.0295C6.67945 14.7395 6.67945 14.2595 6.96945 13.9695L10.1695 10.7695C10.3295 10.6095 10.5395 10.5295 10.7695 10.5495C10.9895 10.5695 11.1895 10.6895 11.3195 10.8795L12.4095 12.5195L15.9595 8.96945C16.2495 8.67945 16.7295 8.67945 17.0195 8.96945C17.3095 9.25945 17.3095 9.73945 17.0195 10.0295L12.8195 14.2295C12.6595 14.3895 12.4495 14.4695 12.2195 14.4495C11.9995 14.4295 11.7995 14.3095 11.6695 14.1195L10.5795 12.4795L8.02945 15.0295C7.87945 15.1795 7.68945 15.2495 7.49945 15.2495Z" fill="#00BD46" />
                  <path d="M16.5 12.25C16.09 12.25 15.75 11.91 15.75 11.5V10.25H14.5C14.09 10.25 13.75 9.91 13.75 9.5C13.75 9.09 14.09 8.75 14.5 8.75H16.5C16.91 8.75 17.25 9.09 17.25 9.5V11.5C17.25 11.91 16.91 12.25 16.5 12.25Z" fill="#00BD46" />
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#00BD46" />
                </svg>


              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">305</div>
                {/* <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Lose trade
                </CardTitle>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5 text-muted-foreground">
                  <path d="M16.9992 15.2495C16.8092 15.2495 16.6192 15.1795 16.4692 15.0295L12.9192 11.4795L11.8292 13.1195C11.7092 13.3095 11.4992 13.4295 11.2792 13.4495C11.0492 13.4695 10.8292 13.3895 10.6792 13.2295L7.47922 10.0295C7.18922 9.73945 7.18922 9.25945 7.47922 8.96945C7.76922 8.67945 8.24922 8.67945 8.53922 8.96945L11.0892 11.5195L12.1792 9.87945C12.2992 9.69945 12.4992 9.57945 12.7292 9.54945C12.9592 9.52945 13.1792 9.60945 13.3292 9.76945L17.5292 13.9695C17.8192 14.2595 17.8192 14.7395 17.5292 15.0295C17.3792 15.1795 17.1892 15.2495 16.9992 15.2495Z" fill="#CC0001" />
                  <path d="M17 15.25H15C14.59 15.25 14.25 14.91 14.25 14.5C14.25 14.09 14.59 13.75 15 13.75H16.25V12.5C16.25 12.09 16.59 11.75 17 11.75C17.41 11.75 17.75 12.09 17.75 12.5V14.5C17.75 14.91 17.41 15.25 17 15.25Z" fill="#CC0001" />
                  <path d="M15.5 22.75H9.5C4.07 22.75 1.75 20.43 1.75 15V9C1.75 3.57 4.07 1.25 9.5 1.25H15.5C20.93 1.25 23.25 3.57 23.25 9V15C23.25 20.43 20.93 22.75 15.5 22.75ZM9.5 2.75C4.89 2.75 3.25 4.39 3.25 9V15C3.25 19.61 4.89 21.25 9.5 21.25H15.5C20.11 21.25 21.75 19.61 21.75 15V9C21.75 4.39 20.11 2.75 15.5 2.75H9.5Z" fill="#CC0001" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">19</div>
                {/* <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Highest profit</CardTitle>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5 text-muted-foreground">
                  <path d="M18.5 12.6504V16.3504C18.5 19.4704 15.59 22.0004 12 22.0004C8.41 22.0004 5.5 19.4704 5.5 16.3504V12.6504C5.5 15.7704 8.41 18.0004 12 18.0004C15.59 18.0004 18.5 15.7704 18.5 12.6504Z" stroke="#00BD46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z" stroke="#00BD46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z" stroke="#00BD46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 10V4L14 6" stroke="#00BD46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 4L10 6" stroke="#00BD46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-green-500">29,781.6 $</div>
                {/* <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Lowest profit
                </CardTitle>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5 text-muted-foreground">
                  <path d="M18.5 12.6504V16.3504C18.5 19.4704 15.59 22.0004 12 22.0004C8.41 22.0004 5.5 19.4704 5.5 16.3504V12.6504C5.5 15.7704 8.41 18.0004 12 18.0004C15.59 18.0004 18.5 15.7704 18.5 12.6504Z" stroke="#CC0001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z" stroke="#CC0001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z" stroke="#CC0001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 10V4L14 6" stroke="#CC0001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 4L10 6" stroke="#CC0001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-red-500">29,781.6 $</div>
                {/* <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p> */}
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <DataChart />
              </CardContent>
            </Card>
            <Card className="col-span-4 md:col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
