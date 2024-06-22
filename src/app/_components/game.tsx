'use client'
import { useEffect, useState } from "react";
import BdodleDropdown from "./bdodleDropdown";
import BdodleAnswersTable from "./bdodleAnswersTable";
import { Node, GameProps } from "../types";
import BdodleScoreCard from "./bdodleScoreCard";
import BdodleBouncingButton from "./bdodleBouncingButton";


const Game = ({ nodes, correctNode }: GameProps) => {
    const [listOfGusses, setListOfGusses] = useState<Node[]>([]);
    const [isWin, setIsWin] = useState(false);
    const [timeToNewGame, setTimeToNewGame] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            setTimeToNewGame((timeToNewGame) => {
                if (timeToNewGame === 0) {
                    clearInterval(timeToNewGame);
                    return 0;
                } else return timeToNewGame - 1;
            });
        }, 1000);
    }, []);

    useEffect(() => {
        if (timeToNewGame === 0) {
            //localStorage.clear();
            // setListOfGusses([]);
            // setIsWin(false); 
            //setTimeToNewGame(5);
        }
    }, [timeToNewGame]);

    useEffect(() => {
        if (isWin) {
            console.log("YOU WIN");
            const resetTime = new Date().setUTCHours(24, 0, 0, 0) - new Date().getTime();
            const secondsToNewGame = Number((resetTime / 1000).toFixed(0));
            setTimeToNewGame(secondsToNewGame);
        }
    }, [isWin]);


    // Load from local storage on component mount
    useEffect(() => {
        const storedGuesses = localStorage.getItem('guessHistory');

        if (storedGuesses) {
            const storedList = JSON.parse(storedGuesses);
            setListOfGusses(storedList);

            storedList.forEach((element: Node) => {
                if (element.nodeOfDay) {
                    setIsWin(true);
                }
            });
        }
    }, []);

    useEffect(() => {
        if (listOfGusses[listOfGusses.length - 1]?.nodeOfDay) {
            setIsWin(true);
        }
        localStorage.setItem('guessHistory', JSON.stringify(listOfGusses));
        localStorage.setItem('date', new Date().toUTCString());
    }, [listOfGusses]);

    function updatedListOfGusses(node: Node) {
        setListOfGusses([...listOfGusses, node]);
    }

    return (
        <div className="flex flex-col">
            <BdodleBouncingButton
                isWin={isWin} />
            {
                !isWin
                    ?
                    <BdodleDropdown
                        nodes={nodes}
                        submitGuess={updatedListOfGusses} />
                    :
                    <BdodleScoreCard
                        numberOfAttempts={listOfGusses.length}
                        timeToNewGame={timeToNewGame} />
            }

            <BdodleAnswersTable
                userListOfGuesses={listOfGusses}
                correctNode={correctNode} />
        </div>
    );
};

export default Game;