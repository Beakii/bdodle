'use client'
import { Button } from "~/components/ui/button";
import { BdodleScoreCardProps } from "../types";
import { toast } from "sonner";


const BdodleScoreCard = ({ numberOfAttempts, timeToNewGame, gameMode, resetGame }: BdodleScoreCardProps) => {

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
        toast.success("Link copied to clipboard");
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
                        <Button onClick={() => { copyToClipboard() }} className="w-[50%] mt-1 border-2 border-yellow-700 bg-yellow-950 hover:opacity-75 hover:bg-yellow-950">Share</Button>
                    </>
                    :
                    <Button onClick={() => { resetGame() }} className="w-[50%] mt-1 border-2 border-yellow-700 bg-yellow-950 hover:opacity-75 hover:bg-yellow-950">Play Again</Button>
            }
        </div>
    );
};

export default BdodleScoreCard;