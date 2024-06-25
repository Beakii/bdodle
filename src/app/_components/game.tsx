'use client'
import { useEffect, useRef, useState } from "react";
import BdodleDropdown from "./bdodleDropdown";
import { Node, GameProps } from "../types";
import BdodleScoreCard from "./bdodleScoreCard";
import BdodleBouncingButton from "./bdodleBouncingButton";
import BdodleAssistTool from "./bdodleAssistTool";
import BdodleAnswersTableHeader from "./bdodleAnswersTableHeader";
import BdodleAnswersTableRow from "./bdodleAnswerTableRow";
import AnswerLegend from "./answerLegend";


const Game = ({ nodes, correctNode, nodesWithConLength }: GameProps) => {
    const itemRef = useRef(null);

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

        const storedDateArray = storedDate?.split(' ');
        const currentDateArray = new Date().toUTCString().split(' ');
        //[0] -  [1] -  [2] -  [3] -  [4] -  [5]    
        //Day - Date - Month - Year - Time - GMT
        if (storedDate) {
            //@ts-ignore
            if (currentDateArray[1] !== storedDateArray[1]) {
                localStorage.removeItem('guessHistory');
                localStorage.removeItem('date');
                setListOfGusses([]);
                setIsWin(false);
            }
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
        if (isWin) {
            const resetTime = new Date().setUTCHours(24, 0, 0, 0) - new Date().getTime();
            const secondsToNewGame = Number((resetTime / 1000).toFixed(0));
            setTimeToNewGame(secondsToNewGame);
        }
    }, [isWin]);

    useEffect(() => {
        if (listOfGusses[listOfGusses.length - 1]?.nodeOfDay) {
            setIsWin(true);
        }
        (itemRef.current as HTMLElement | null)?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
        localStorage.setItem('guessHistory', JSON.stringify(listOfGusses));
        localStorage.setItem('date', new Date().toUTCString());
    }, [listOfGusses]);

    function updatedListOfGusses(node: Node) {
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
                        setToggleAssist={setToggleAssist}
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
                                <div className="lg:max-h-[600px] max-h-[40vh] lg:mt-5 overflow-y-scroll overflow-x-hidden">
                                    {listOfGusses.map((node, index) => {
                                        return (
                                            <div ref={itemRef}>
                                                <BdodleAnswersTableRow
                                                    guessedNode={node}
                                                    correctNode={correctNode}
                                                    shouldPlayAnimation={index === (listOfGusses.length - 1) ? shouldPlayAnimation : false} />
                                            </div>
                                        );
                                    })}
                                </div>
                            }
                            <AnswerLegend />
                        </>
                    </>
            }
        </div>
    );
};

export default Game;