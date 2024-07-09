'use client'
import Link from "next/link";
import bdo from "~/assets/png/bdoAssets/BlackSpiritIcon.png";
import { Button } from "~/components/ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "~/components/ui/menubar"
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const loadingSpinner = <svg fill="white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect className="spinner_zWVm" x="1" y="1" width="7.33" height="7.33" /><rect className="spinner_gfyD" x="8.33" y="1" width="7.33" height="7.33" /><rect className="spinner_T5JJ" x="1" y="8.33" width="7.33" height="7.33" /><rect className="spinner_E3Wz" x="15.66" y="1" width="7.33" height="7.33" /><rect className="spinner_g2vs" x="8.33" y="8.33" width="7.33" height="7.33" /><rect className="spinner_ctYB" x="1" y="15.66" width="7.33" height="7.33" /><rect className="spinner_BDNj" x="15.66" y="8.33" width="7.33" height="7.33" /><rect className="spinner_rCw3" x="8.33" y="15.66" width="7.33" height="7.33" /><rect className="spinner_Rszm" x="15.66" y="15.66" width="7.33" height="7.33" /></svg>;

export function TopNav() {
    const pathName = usePathname();
    const [homeLoading, setHomeLoading] = useState(false);
    const [dailyLoading, setDailyLoading] = useState(false);
    const [arcadeLoading, setArcadeLoading] = useState(false);

    useEffect(() => {
        setHomeLoading(false);
        setDailyLoading(false);
        setArcadeLoading(false);
    }, [pathName]);

    return (
        <nav className="flex w-full items-center justify-center border-b-2 mb-5 p-5 text-5xl font-semibold bg-black">
            <div>
                <Menubar className="absolute lg:left-[50px] left-[5px] top-[50px]">
                    <MenubarMenu>
                        <MenubarTrigger>☰</MenubarTrigger>
                        <MenubarContent>
                            {/* <div className="flex justify-center items-center">{`You are not signed in`}</div> */}
                            <MenubarSeparator />
                            <Link href="/" onClick={() => { setHomeLoading(true) }}>
                                <Button className="flex justify-start w-full bg-yellow-950 hover:bg-yellow-900">{homeLoading ? loadingSpinner : "Home"}</Button>
                            </Link>
                            <MenubarSeparator />
                            <Link href="/daily" onClick={() => { setDailyLoading(true) }}>
                                <Button className="flex justify-start w-full bg-yellow-950 hover:bg-yellow-900">{dailyLoading ? loadingSpinner : "Daily"}</Button>
                            </Link>
                            <MenubarSeparator />
                            <Link href="/arcade" onClick={() => { setArcadeLoading(true) }}>
                                <Button className="flex justify-start w-full bg-yellow-950 hover:bg-yellow-900">{arcadeLoading ? loadingSpinner : "Arcade"}</Button>
                            </Link>
                            <MenubarSeparator />
                            {/* <MenubarItem>
                                <Button className="flex justify-start w-full text-neutral-900 hover:text-white bg-white">Sign in</Button>

                                <Button className="flex justify-start w-full text-neutral-900 hover:text-white bg-white">Sign out</Button>
                            </MenubarItem>
                            <MenubarSeparator /> */}
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Link href="/">
                    <div id="title" className="flex select-none">
                        <span>BD</span>
                        <Image src={bdo.src} alt="BlackSpiritSpiral" height={44} width={44} className="m-1" />
                        <span>dle</span>
                    </div>
                </Link>
                <div className="flex gap-20 pt-3">
                    <div className="bg-[#E30D03] size-7 rounded-full blur-sm"></div>
                    <div className="bg-[#E30D03] size-7 rounded-full blur-sm"></div>
                </div>
            </div>
            <div className="lg:absolute lg:block right-5 hidden">
            </div>
        </nav>
    );
}