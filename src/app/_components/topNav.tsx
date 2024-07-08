'use server';
import Link from "next/link";
import bdo from "~/assets/png/bdoAssets/BlackSpiritIcon.png";
import { Button } from "~/components/ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "~/components/ui/menubar"
import Image from "next/image";

export async function TopNav() {

    return (
        <nav className="flex w-full items-center justify-center border-b-2 mb-5 p-5 text-5xl font-semibold bg-black">
            <div>
                <Menubar className="absolute lg:left-[50px] left-[5px] top-[50px]">
                    <MenubarMenu>
                        <MenubarTrigger>☰</MenubarTrigger>
                        <MenubarContent>
                            {/* <div className="flex justify-center items-center">{`You are not signed in`}</div> */}
                            <MenubarSeparator />
                            <Link href="/">
                                <Button className="flex justify-start w-full text-neutral-900 hover:text-white bg-white">Home</Button>
                            </Link>
                            <MenubarSeparator />
                            <Link href="/daily">
                                <Button className="flex justify-start w-full text-neutral-900 hover:text-white bg-white">Daily</Button>
                            </Link>
                            <MenubarSeparator />
                            <Link href="/arcade">
                                <Button className="flex justify-start w-full text-neutral-900 hover:text-white bg-white">Arcade</Button>
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