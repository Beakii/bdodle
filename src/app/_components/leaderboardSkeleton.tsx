import { Skeleton } from "~/components/ui/skeleton"

export function LeaderboardSkeleton() {
    return (
        <div className="flex flex-col space-y-3">
            <div className="flex justify-center items-center gap-5">
                <Skeleton className="size-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    )
}