'use server'
import { getLeaderboard } from "~/server/queries";
import LandingPage from "./_components/landingPage";
import { User } from "./types";
import { unstable_noStore as noStore } from 'next/cache'

export default async function HomePage() {
  noStore();
  //@ts-ignore
  const data: User[] = await getLeaderboard();
  data.sort((a, b) => a.score - b.score);

  return (
    <main className="flex flex-col min-w-full">
      <div className=" lg:w-[70vw] lg:h-[70vh] w-full h-full">
        <LandingPage leaderboardData={data} />
      </div>
    </main>
  );
}


