'use server'
import LandingPage from "./_components/landingPage";

export default async function HomePage() {
  return (
    <main className="flex flex-col min-w-full">
      <div className=" lg:w-[70vw] w-full h-full">
        <LandingPage />
      </div>
    </main>
  );
}


