'use server'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import bdo from "~/assets/png/bdoAssets/BlackSpiritIcon.png";

export async function TopNav() {

    const user = await currentUser();
    console.log(user?.username)

    return (
        <nav className="flex w-full items-center justify-between border-b-2 p-5 text-5xl font-semibold bg-black">
            <div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div id="title" className="flex">
                    <span>BD</span>
                    <SignedOut>
                        <SignInButton>
                            <img src={bdo.src} className="size-11 m-1" />
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <img src={bdo.src} className="size-11 m-1" />
                    </SignedIn>
                    <span>dle</span>
                </div>
                <div className="flex gap-20 pt-3">
                    <div className="bg-[#E30D03] size-7 rounded-full blur-sm"></div>
                    <div className="bg-[#E30D03] size-7 rounded-full blur-sm"></div>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}