'use client'
import { FaDiscord } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

const Footer = () => {

    return (
        <div id="footer" className="w-full h-[12.4vh] bg-stone-800 mt-5 border-t-2">
            <div className="lg:max-w-[50vw] mx-auto flex justify-between px-2 py-2">
                <div className="flex justify-center items-center">
                    <h1 className="lg:text-l text-sm">This project is not affiliated with Pearl Abyss</h1>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <a className="lg:px-2 py-1 flex justify-center items-center" href="https://discord.gg/AJGHXgdbFh" target="_blank">
                        <FaDiscord className="lg:size-14 size-10 hover:text-amber-700" />
                    </a>

                    <a className="lg:px-2 py-1 flex justify-center items-center" href="https://ko-fi.com/beakie" target="_blank">
                        <SiKofi className="lg:size-14 size-10 hover:text-amber-700" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;