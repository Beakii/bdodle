'use client'
import Link from "next/link";
import { useState } from "react";
import { IoMdTimer } from "react-icons/io";
import { SiApplearcade } from "react-icons/si";
import TutorialModal from "./tutorialModal";

const loadingSpinner = <svg fill="white" width="75" height="75" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect className="spinner_zWVm" x="1" y="1" width="7.33" height="7.33" /><rect className="spinner_gfyD" x="8.33" y="1" width="7.33" height="7.33" /><rect className="spinner_T5JJ" x="1" y="8.33" width="7.33" height="7.33" /><rect className="spinner_E3Wz" x="15.66" y="1" width="7.33" height="7.33" /><rect className="spinner_g2vs" x="8.33" y="8.33" width="7.33" height="7.33" /><rect className="spinner_ctYB" x="1" y="15.66" width="7.33" height="7.33" /><rect className="spinner_BDNj" x="15.66" y="8.33" width="7.33" height="7.33" /><rect className="spinner_rCw3" x="8.33" y="15.66" width="7.33" height="7.33" /><rect className="spinner_Rszm" x="15.66" y="15.66" width="7.33" height="7.33" /></svg>;

const LandingPage = () => {
    const [dailyLoading, setDailyLoading] = useState(false);
    const [arcadeLoading, setArcadeLoading] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full h-full lg:min-h-[75vh] min-h-[69vh] flex lg:flex-row flex-col justify-center items-center bg-stone-900 gap-10">
                <Link href="/daily" onClick={() => setDailyLoading(true)}>
                    <div className="size-64 flex flex-col justify-between items-center text-8xl py-5 border-2 border-yellow-700 bg-yellow-950 hover:opacity-75">
                        <span className="text-7xl">Daily</span>
                        {dailyLoading ? loadingSpinner : <IoMdTimer />}
                    </div>
                </Link>
                <Link href="/arcade" onClick={() => setArcadeLoading(true)}>
                    <div className="size-64 flex flex-col justify-between items-center text-8xl py-5 border-2 border-yellow-700 bg-yellow-950 hover:opacity-75">
                        <span className="text-7xl">Arcade</span>
                        {arcadeLoading ? loadingSpinner : <SiApplearcade />}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;