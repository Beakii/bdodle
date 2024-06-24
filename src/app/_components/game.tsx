'use client'
import { useEffect, useState } from "react";
import BdodleDropdown from "./bdodleDropdown";
import { Node, GameProps } from "../types";
import BdodleScoreCard from "./bdodleScoreCard";
import BdodleBouncingButton from "./bdodleBouncingButton";
import BdodleAssistTool from "./bdodleAssistTool";
import BdodleAnswersTableHeader from "./bdodleAnswersTable";
import BdodleAnswersTableRow from "./bdodleAnswerTableRow";


const Game = ({ nodes, correctNode, nodesWithConLength }: GameProps) => {
    const [listOfGusses, setListOfGusses] = useState<Node[]>([]);
    const [isWin, setIsWin] = useState(false);
    const [timeToNewGame, setTimeToNewGame] = useState(0);
    const [toggleAssist, setToggleAssist] = useState(false);
    const [blackSpiritText, setBlackSpiritText] = useState("I can help!");
    const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false);

    // Load from local storage on component mount
    useEffect(() => {
        const storedGuesses = localStorage.getItem('guessHistory');
        const storedDate = localStorage.getItem('date');

        if (storedDate) {
            const currentDate = new Date().toUTCString();
            const storedDateInUTC = new Date(storedDate).toUTCString();

            if (currentDate > storedDateInUTC) {
                localStorage.removeItem('guessHistory');
                localStorage.removeItem('date');
                setListOfGusses([]);
                setIsWin(false);
            }
        }

        if (storedGuesses) {
            const storedList = JSON.parse(storedGuesses);
            setListOfGusses(storedList);

            storedList.forEach((element: Node) => {
                if (element.nodeOfDay) {
                    setIsWin(true);
                    setBlackSpiritText("Nice job!");
                }
            });
        }
    }, []);

    //Timer used for new game
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
            localStorage.clear();
            setListOfGusses([]);
            setIsWin(false);
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

    useEffect(() => {
        if (listOfGusses[listOfGusses.length - 1]?.nodeOfDay) {
            setIsWin(true);
        }

        localStorage.setItem('guessHistory', JSON.stringify(listOfGusses));
        localStorage.setItem('date', new Date().toUTCString());
    }, [listOfGusses]);

    function updatedListOfGusses(node: Node) {
        console.log("im adding an item to the list and updating the animation state")
        setListOfGusses([...listOfGusses, node]);
        setShouldPlayAnimation(true);
        const timer = setTimeout(() => {
            setShouldPlayAnimation(false);
        }, 6000);
        return () => clearTimeout(timer);
    }

    return (
        <div className="flex flex-col">
            <BdodleBouncingButton
                blackSpiritText={blackSpiritText}
                setBlackSpiritText={setBlackSpiritText}
                toggleAssist={toggleAssist}
                setToggleAssist={setToggleAssist}
                isWin={isWin} />
            {
                toggleAssist
                    ?
                    <BdodleAssistTool
                        nodesWithConLength={nodesWithConLength} />
                    :
                    <>
                        {
                            !isWin
                                ?
                                <BdodleDropdown
                                    nodes={nodes}
                                    submitGuess={updatedListOfGusses} />
                                :
                                <>
                                    <BdodleScoreCard
                                        numberOfAttempts={listOfGusses.length}
                                        timeToNewGame={timeToNewGame} />
                                </>
                        }
                        <>
                            <BdodleAnswersTableHeader />
                            {
                                listOfGusses.map((node, index) => {
                                    return (
                                        <BdodleAnswersTableRow
                                            key={index}
                                            guessedNode={node}
                                            correctNode={correctNode}
                                            shouldPlayAnimation={index === (listOfGusses.length - 1) ? shouldPlayAnimation : false} />
                                    );
                                })
                            }
                        </>
                    </>
            }
        </div>
    );
};

export default Game;