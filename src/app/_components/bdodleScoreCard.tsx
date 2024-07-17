'use client'
import { Button } from "~/components/ui/button";
import { BdodleScoreCardProps, Node } from "../types";
import { toast } from "sonner";
import SignedOut from "../context/SignedOut";
import { signIn } from "next-auth/react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "~/components/ui/tooltip"
import { BsInfoCircleFill } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { validateName, validateType, validateConnections, validateContribution, validateLocation, validateTerritory, obfuscation } from "../nodeValidator";

const BdodleScoreCard = ({ numberOfAttempts, timeToNewGame, gameMode, resetGame, correctNode }: BdodleScoreCardProps) => {

    function getFormattedTime(timeInSeconds: number) {
        const dateObj = new Date(timeInSeconds * 1000);
        const hours = dateObj.getUTCHours();
        const minutes = dateObj.getUTCMinutes();
        const seconds = dateObj.getSeconds();
        const timeString = hours.toString().padStart(2, '0') + ':' +
            minutes.toString().padStart(2, '0') + ':' +
            seconds.toString().padStart(2, '0');

        return timeString;
    }

    function copyToClipboard() {
        const history = localStorage.getItem("dailyHistory");
        const historyJSON = JSON.parse(history!);
        let clipboardString = "🎉 Congratulations 🎉" + "\n" + `You took: ${historyJSON.length} attempts to guess the correct node` + "\n" + "Your last 5 attempts were:" + "\n";
        historyJSON.slice(-5).forEach((item: Node) => {
            clipboardString += `${validateName(item, correctNode)}${validateType(item, correctNode)}${validateContribution(item, correctNode)}${validateConnections(item, correctNode)}${validateLocation(item, correctNode)}${validateTerritory(item, correctNode)}` + "\n";
        });
        clipboardString += "Play now at: https://bdodle.com/";
        navigator.clipboard.writeText(clipboardString);
        toast.success("Score copied to clipboard");
    }

    return (
        <div className="flex flex-col justify-center items-center lg:min-w-[25vw] lg:max-w-[30vw] lg:mx-20 min-w-[99vw]">
            <span className="font-semibold text-3xl">🎉 Congratulations 🎉</span>
            <div className="">{"You took: " + numberOfAttempts + " attempts to guess the correct node"}</div>
            {
                gameMode === "daily"
                    ?
                    <>
                        {"Time to new game: " + getFormattedTime(timeToNewGame)}
                        <div className="w-full justify-center items-centers flex gap-1">
                            <Button onClick={() => { copyToClipboard() }} className="w-[50%] mt-1 border-2 border-yellow-700 bg-yellow-950 hover:opacity-75 hover:bg-yellow-950">Share</Button>
                            <SignedOut>
                                <Button onClick={() => { signIn("discord", { callbackUrl: "/daily" }) }} className="w-[50%] mt-1 border-2 border-yellow-700 bg-yellow-950 hover:opacity-75 hover:bg-yellow-950">{<>Login<FaDiscord className="size-4 ml-2" /></>}</Button>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <BsInfoCircleFill className="size-6 text-yellow-700" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {"If you are a content creator you can Login and have your score displayed on the leaderboard"}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </SignedOut>
                        </div>
                    </>
                    :
                    <Button onClick={() => { resetGame() }} className="w-[50%] mt-1 border-2 border-yellow-700 bg-yellow-950 hover:opacity-75 hover:bg-yellow-950">Play Again</Button>
            }
        </div>
    );
};

export default BdodleScoreCard;