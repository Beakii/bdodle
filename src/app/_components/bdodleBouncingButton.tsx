'use client'
import BlackSpirit from "~/assets/png/bdoAssets/BlackSpirit.png";
import { BdodleBouncingButtonProps } from "../types";
import Image from "next/image";


const BdodleBouncingButton = ({ setToggleAssist, toggleAssist, blackSpiritText }: BdodleBouncingButtonProps) => {

    function handleClick() {
        setToggleAssist(!toggleAssist);
    }

    return (
        <div className="lg:static lg:border-none border absolute top-0 right-0 bg-stone-900">
            <div onClick={handleClick} className="size-20 lg:animate-bounce hover:cursor-pointer flex flex-col items-center">
                <Image src={BlackSpirit.src} alt={"BlackSpirit.png"} height={80} width={80} />
                <div className="text-center">{blackSpiritText}</div>
            </div>
        </div>
    );
};

export default BdodleBouncingButton;