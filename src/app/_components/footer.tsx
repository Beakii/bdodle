'use client'
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { FaDiscord } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

const Footer = () => {


    return (
        <div className="lg:h-[9.9vh] min-h-[12vh] max-h-[15vh] w-full bg-stone-800 mt-5 border-t-2">
            <div className="lg:max-w-[50vw] mx-auto flex justify-between px-2 py-2">
                <div className="flex justify-center items-center">
                    <h1 className="lg:text-l text-sm">This project is not affiliated with Pearl Abyss</h1>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <HoverCard>
                        <HoverCardTrigger>
                            <div className="lg:px-2 py-1 flex justify-center items-center">
                                <a href="https://discord.gg/AJGHXgdbFh" target="_blank">
                                    <FaDiscord className="lg:size-14 size-10 hover:text-amber-700" />
                                </a>
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <h1>Have a suggestion or issue? Join the discord</h1>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger>
                            <div className="lg:px-2 py-1 flex justify-center items-center">
                                <a href="https://ko-fi.com/beakie" target="_blank">
                                    <SiKofi className="lg:size-14 size-10 hover:text-amber-700" />
                                </a>
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <h1>Not necessary but helps with server costs!</h1>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </div>
        </div>
    );
};

export default Footer;