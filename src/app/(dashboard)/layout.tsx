
import { Icons } from "@/components/common/icons"
import Link from "next/link"

export default function Component({ children }: { children: React.ReactNode }) {
    return (<>
        {children}
        <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-around border-t bg-white dark:border-gray-800 dark:bg-gray-950">
            <Link
                href="#"
                className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
            >
                <Icons.home className="h-6 w-6" />
            </Link>
            <Link
                href="#"
                className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
            >
                <Icons.search className="h-6 w-6" />
            </Link>
            <Link
                href="#"
                className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
            >
                <Icons.bell className="h-6 w-6" />
            </Link>
            <Link
                href="#"
                className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-gray-400 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
            >
                <Icons.user className="h-6 w-6" />
            </Link>
        </div>
    </>

    )
}