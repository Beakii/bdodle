'use client'
import BlackSpirit from "~/assets/png/bdoAssets/BlackSpirit.png";
import { BdodleBouncingButtonProps } from "../types";


const BdodleBouncingButton = ({ isWin }: BdodleBouncingButtonProps) => {

    return (
        <div className="absolute lg:top-[25vh] right-3 bottom-[3vh]">
            <div className="size-20 animate-bounce hover:cursor-pointer flex flex-col items-center">
                <img src={BlackSpirit.src} />
                <div>{isWin ? "Nice job!" : "I can help!"}</div>
            </div>
        </div>
    );
};

export default BdodleBouncingButton;