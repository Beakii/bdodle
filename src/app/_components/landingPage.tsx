'use client'
import { IoMdTimer } from "react-icons/io";
import { SiApplearcade } from "react-icons/si";

const LandingPage = () => {

    return (
        <div className="w-full h-full lg:min-h-[75vh] min-h-[69vh] flex lg:flex-row flex-col justify-center items-center bg-stone-900 gap-10">
            <div className="size-64 flex flex-col justify-between items-center text-8xl py-5 bg-green-500">
                <span className="text-7xl">Daily</span>
                <IoMdTimer />
            </div>
            <div className="size-64 flex flex-col justify-between items-center text-8xl py-5 bg-blue-500">
                <span className="text-7xl">Arcade</span>
                <SiApplearcade />
            </div>
        </div>
    );
};

export default LandingPage;