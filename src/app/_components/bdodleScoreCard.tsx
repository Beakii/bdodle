'use client'
import { use, useEffect, useState } from "react";

import { BdodleScoreCardProps } from "../types";


const BdodleScoreCard = ({ numberOfAttempts, timeToNewGame }: BdodleScoreCardProps) => {

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

            <div>
                {"Time to new game: " + getFormattedTime(timeToNewGame)}
            </div>
        </div>
    );
};

export default BdodleScoreCard;