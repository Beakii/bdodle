'use client'
import { FaDiscord } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

const Footer = () => {

    return (
        <div id="footer" className="w-full h-[10vh] bg-stone-800 mt-5 border-t-2">
            <div className="lg:max-w-[50vw] h-full mx-auto flex justify-between px-2 py-2">
                <div className="flex flex-col justify-center">
                    <h1 className="lg:text-l text-sm">This project is not affiliated with Pearl Abyss</h1>
                    <a className="lg:px-2 py-1 flex justify-start items-center hover:text-amber-700" href="https://ko-fi.com/beakie" target="_blank">
                        <SiKofi className="lg:size-14 size-10" />
                        <span className="pl-2 text-sm">Support the project</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;