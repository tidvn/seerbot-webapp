import { Icons } from "@/components/common/icons";
import Link from "next/link";

export default function BottomTab() {
    return (
        <>
        <div></div>
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-10/12 max-w-lg h-16 bg-white border border-gray-200 rounded-full z-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
                    <Link
                        href="/statistics"
                        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                    >
                        <Icons.areaChart className="h-6 w-6" />
                    </Link>
                    <Link
                        href="/ai-predict"
                        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                    >
                        <Icons.bot className="h-6 w-6" />
                    </Link>
                    <Link
                        href="/notification"
                        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                    >
                        <Icons.bell className="h-6 w-6" />
                    </Link>
                    <Link
                        href="/wallet"
                        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                    >
                        <Icons.wallet className="h-6 w-6" />
                    </Link>
                </div>
            </div>
        </>
    );
}
