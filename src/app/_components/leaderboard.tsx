import Link from "next/link";
import SignedIn from "../context/SignedIn"
import SignedOut from "../context/SignedOut"
import { LeaderboardSkeleton } from "./leaderboardSkeleton"
import { useSession } from "next-auth/react"
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { LeaderboardProps } from "../types";
import Image from "next/image";

const loadingSpinner = <svg fill="white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect className="spinner_zWVm" x="1" y="1" width="7.33" height="7.33" /><rect className="spinner_gfyD" x="8.33" y="1" width="7.33" height="7.33" /><rect className="spinner_T5JJ" x="1" y="8.33" width="7.33" height="7.33" /><rect className="spinner_E3Wz" x="15.66" y="1" width="7.33" height="7.33" /><rect className="spinner_g2vs" x="8.33" y="8.33" width="7.33" height="7.33" /><rect className="spinner_ctYB" x="1" y="15.66" width="7.33" height="7.33" /><rect className="spinner_BDNj" x="15.66" y="8.33" width="7.33" height="7.33" /><rect className="spinner_rCw3" x="8.33" y="15.66" width="7.33" height="7.33" /><rect className="spinner_Rszm" x="15.66" y="15.66" width="7.33" height="7.33" /></svg>;

export const Leaderboard = ({ leaderboardData }: LeaderboardProps) => {
    const [loginLoading, setLoginLoading] = useState(false);
    const session = useSession();

    return (
        <div className="flex flex-col space-y-3 ">
            <h1 className="text-center text-xl">Content Creators Leaderboard</h1>
            <div className={`flex gap-5 max-h-[20vh] pr-5 relative overflow-x-hidden ${session.status === "authenticated" ? "overflow-y-auto" : "overflow-y-hidden"}`}>
                <SignedOut>
                    <Link href="/api/auth/signin">
                        <Button onClick={() => { setLoginLoading(true) }} className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-yellow-950 border-2 border-yellow-700 hover:bg-yellow-900 z-50 text-2xl px-5 py-8">{loginLoading ? loadingSpinner : "Sign in to view"}</Button>
                    </Link>
                </SignedOut>
                <div className="space-y-2">
                    {
                        leaderboardData.length === 0
                            ?
                            <>
                                <SignedIn>
                                    <span className="flex justify-center items-center">No creators have guessed it yet :(</span>
                                </SignedIn>
                                <SignedOut>
                                    <LeaderboardSkeleton />
                                    <LeaderboardSkeleton />
                                    <LeaderboardSkeleton />
                                    <LeaderboardSkeleton />
                                    <LeaderboardSkeleton />
                                </SignedOut>
                            </>
                            :
                            leaderboardData.map((player, index) => (
                                <div key={index} className={`z-0 flex justify-between items-center gap-5 ${session.status === "authenticated" ? "" : "opacity-30"}`}>
                                    <SignedIn>
                                        <Image className="size-10 rounded-full bg-white" src={player.profilePicture} width={40} height={40} alt={"Profile Picture"} />
                                        <span className="text-2xl">{player.discordUsername}</span>
                                        <span className="text-2xl">{player.score + " guess(es)"}</span>
                                    </SignedIn>
                                    <SignedOut>
                                        <LeaderboardSkeleton />
                                    </SignedOut>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}