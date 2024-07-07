'use client'
import { Button } from "~/components/ui/button";
import { BdodleScoreCardProps } from "../types";


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


    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <span className="font-semibold text-3xl">🎉 Congratulations 🎉</span>
            <div className="">{"You took: " + numberOfAttempts + " attempts to guess the correct node"}</div>

            {gameMode === "daily"
                ?
                <div>
                    {"Time to new game: " + getFormattedTime(timeToNewGame)}
                </div>
                :
                <Button onClick={() => { resetGame() }} className="w-full border-2 border-yellow-700 bg-yellow-950 hover:opacity-75 hover:bg-yellow-950">Play Again</Button>
            }
        </div>
    );
};

export default BdodleScoreCard;