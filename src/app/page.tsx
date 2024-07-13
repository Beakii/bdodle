'use server'
import { getLeaderboard } from "~/server/queries";
import LandingPage from "./_components/landingPage";
import { User } from "./types";
import { unstable_noStore as noStore } from 'next/cache'
import { usernameMap } from "./usernameMap";

export default async function HomePage() {
  noStore();
  //@ts-ignore
  const data: User[] = await getLeaderboard();

  data.forEach((user, index) => {
    if (user.discordUsername === usernameMap[index]?.discordUsername) {
      user.discordUsername = usernameMap[index]?.twitchUsername!;
    }
  });

  console.log(data)

  // const data: User[] = [
  //   {
  //     profilePicture: "https://cdn.discordapp.com/avatars/123456/abcdef.png",
  //     discordUsername: "example#1234",
  //     score: 1234,
  //   },
  //   {
  //     profilePicture: "https://cdn.discordapp.com/avatars/123456/abcdef.png",
  //     discordUsername: "example#1234",
  //     score: 1234,
  //   },
  //   {
  //     profilePicture: "https://cdn.discordapp.com/avatars/123456/abcdef.png",
  //     discordUsername: "example#1234",
  //     score: 1234,
  //   },
  //   {
  //     profilePicture: "https://cdn.discordapp.com/avatars/123456/abcdef.png",
  //     discordUsername: "example#1234",
  //     score: 1234,
  //   },
  //   {
  //     profilePicture: "https://cdn.discordapp.com/avatars/123456/abcdef.png",
  //     discordUsername: "example#1234",
  //     score: 1234,
  //   },
  //   {
  //     profilePicture: "https://cdn.discordapp.com/avatars/123456/abcdef.png",
  //     discordUsername: "example#1234",
  //     score: 1234,
  //   },
  //   {
  //     profilePicture: "https://cdn.discordapp.com/avatars/123456/abcdef.png",
  //     discordUsername: "example#1234",
  //     score: 1234,
  //   },
  //   {
  //     profilePicture: "https://cdn.discordapp.com/avatars/123456/abcdef.png",
  //     discordUsername: "example#1234",
  //     score: 1234,
  //   },
  //   {
  //     profilePicture: "https://cdn.discordapp.com/avatars/123456/abcdef.png",
  //     discordUsername: "example#1234",
  //     score: 1234,
  //   },
  // ]
  return (
    <main className="flex flex-col min-w-full">
      <div className=" lg:w-[70vw] lg:h-[70vh] w-full h-full">
        <LandingPage leaderboardData={data} />
      </div>
    </main>
  );
}


