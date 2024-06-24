'use client'
import BlackSpirit from "~/assets/png/bdoAssets/BlackSpirit.png";
import { BdodleBouncingButtonProps } from "../types";
import { useEffect } from "react";


const BdodleBouncingButton = ({ isWin, setToggleAssist, toggleAssist, blackSpiritText, setBlackSpiritText }: BdodleBouncingButtonProps) => {

    useEffect(() => {
        setBlackSpiritText(toggleAssist ? "Click me to return!" : "I can help!");
    }, [toggleAssist]);

    function handleClick() {
        setToggleAssist(!toggleAssist);
    }

    return (
        <div className="absolute lg:top-[25vh] right-[8vw] bottom-[3vh]">
            <div onClick={handleClick} className="size-20 animate-bounce hover:cursor-pointer flex flex-col items-center">
                <img src={BlackSpirit.src} />
                <div className="text-center">{blackSpiritText}</div>
            </div>
        </div>
    );
};

export default BdodleBouncingButton;