'use client'
import LandingPage from "./_components/landingPage";

export default function HomePage() {

  return (
    <main className="flex flex-col min-w-full">
      <div className=" lg:w-[70vw] lg:h-[70vh] w-full h-full">
        <LandingPage />
      </div>
    </main>
  );
}


