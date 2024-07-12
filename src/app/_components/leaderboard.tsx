import SignedIn from "../context/SignedIn"
import SignedOut from "../context/SignedOut"
import { LeaderboardSkeleton } from "./leaderboardSkeleton"

export function Leaderboard() {
    const data = [
        {
            username: "Player 1",
            score: 100
        },
        {
            username: "Player 2",
            score: 90
        },
        {
            username: "Player 3",
            score: 80
        },
        {
            username: "Player 4",
            score: 70
        },
        {
            username: "Player 5",
            score: 60
        },
        {
            username: "Player 6",
            score: 50
        },
        {
            username: "Player 7",
            score: 40
        },
        {
            username: "Player 8",
            score: 30
        },
        {
            username: "Player 9",
            score: 20
        },
        {
            username: "Player 10",
            score: 10
        }
    ]
    return (
        <div className="flex flex-col space-y-3 ">
            <h1 className="text-center text-xl">Leaderboard</h1>
            <div className="flex gap-5 max-h-[20vh] overflow-y-scroll overflow-x-hidden pr-5">
                <div className="space-y-2">
                    {data.map((player, index) => (
                        <div key={index} className="flex justify-between items-center gap-5">
                            <SignedIn>
                                <div className="size-10 rounded-full bg-white"></div>
                                <span className="text-2xl">{player.username}</span>
                                <span className="text-2xl">{player.score}</span>
                            </SignedIn>
                            <SignedOut>
                                <LeaderboardSkeleton />
                            </SignedOut>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}