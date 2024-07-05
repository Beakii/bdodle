'use client'
import Link from "next/link";
import { IoMdTimer } from "react-icons/io";
import { SiApplearcade } from "react-icons/si";

const LandingPage = () => {

    return (
        <div className="w-full h-full lg:min-h-[75vh] min-h-[69vh] flex lg:flex-row flex-col justify-center items-center bg-stone-900 gap-10">
            <Link href="/daily">
                <div className="size-64 flex flex-col justify-between items-center text-8xl py-5 border-2 border-yellow-700 bg-yellow-950 hover:opacity-75">
                    <span className="text-7xl">Daily</span>
                    <IoMdTimer />
                </div>
            </Link>
            <Link href="/arcade">
                <div className="size-64 flex flex-col justify-between items-center text-8xl py-5 border-2 border-yellow-700 bg-yellow-950 hover:opacity-75">
                    <span className="text-7xl">Arcade</span>
                    <SiApplearcade />
                </div>
            </Link>
        </div>
    );
};

export default LandingPage;