'use client'
import LandingPage from "./_components/landingPage";
import { useSession } from "next-auth/react";

export default function HomePage() {

  return (
    <main className="flex flex-col min-w-full">
      <div className=" lg:w-[70vw] w-full h-full">
        <h1 className="text-4xl font-bold text-center"></h1>
        <LandingPage />
      </div>
    </main>
  );
}


