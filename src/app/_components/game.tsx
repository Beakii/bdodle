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
import { IoMdTimer } from "react-icons/io";
import { SiApplearcade } from "react-icons/si";


const Game = ({ nodes, correctNode, nodesWithConLength, gameMode }: GameProps) => {
    const itemRef = useRef(null);
    const obfuscation = 184523;

    const [listOfGusses, setListOfGusses] = useState<Node[]>([]);
    const [isWin, setIsWin] = useState(false);
    const [timeToNewGame, setTimeToNewGame] = useState(0);
    const [toggleAssist, setToggleAssist] = useState(false);
    const [blackSpiritText, setBlackSpiritText] = useState("I can help!");
    const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false);
    const [filteredNodes, setFilteredNodes] = useState<Node[]>(nodes);

    // Load from local storage on component mount
    useEffect(() => {
        pageLoad(gameMode);
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
        setBlackSpiritText(toggleAssist ? "Click me to return!" : "I can help!");
        (itemRef.current as HTMLElement | null)?.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }, [toggleAssist]);

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
        setFilteredNodes(filteredNodes.filter(node => node !== listOfGusses[listOfGusses.length - 1]));

        (itemRef.current as HTMLElement | null)?.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

        if (gameMode === "daily") {
            localStorage.setItem('dailyHistory', JSON.stringify(listOfGusses));
        }
        if (gameMode === "arcade") {
            localStorage.setItem('arcadeHistory', JSON.stringify(listOfGusses));
        }
    }, [listOfGusses]);

    function pageLoad(gameMode: string) {
        const storedGuesses = localStorage.getItem(`${gameMode}History`);
        const storedCorrectNodeId = localStorage.getItem(`${gameMode}CorrectNodeId`);

        if (!storedCorrectNodeId) {
            localStorage.removeItem(`${gameMode}History`);
            setIsWin(false);
            setListOfGusses([]);
        }

        if (storedGuesses && storedCorrectNodeId) {
            const storedList = JSON.parse(storedGuesses);
            setListOfGusses(storedList);

            storedList.forEach((element: Node) => {
                if (element.nodeOfDay) {
                    setIsWin(true);
                    setBlackSpiritText("Nice job!");
                }
            });
        }

        if (storedCorrectNodeId) {
            const storedCorrectNodeIdJson = JSON.parse(storedCorrectNodeId);
            let correctId = storedCorrectNodeIdJson / obfuscation;
            if (correctId !== correctNode.nodeId) {
                localStorage.removeItem(`${gameMode}History`);
                localStorage.removeItem(`${gameMode}CorrectNodeId`);
                setIsWin(false);
                setListOfGusses([]);
            }
        }

        const obfuscatedCorrectNode = correctNode.nodeId * obfuscation;
        localStorage.setItem(`${gameMode}CorrectNodeId`, JSON.stringify(obfuscatedCorrectNode));
    }

    function resetGame() {
        setListOfGusses([]);
        setIsWin(false);
        setFilteredNodes(nodes);
        localStorage.removeItem('arcadeHistory');
        localStorage.removeItem('arcadeCorrectNodeId');
        window.location.reload();
    }

    function updatedListOfGusses(node: Node) {
        setListOfGusses([...listOfGusses, node]);
        setShouldPlayAnimation(true);
        localStorage.setItem('date', new Date().toUTCString());
        const timer = setTimeout(() => {
            setShouldPlayAnimation(false);
        }, 4000);
        return () => clearTimeout(timer);
    }

    return (
        <div className="flex flex-col">
            {
                toggleAssist
                    ?
                    <BdodleAssistTool
                        setToggleAssist={setToggleAssist}
                        nodesWithConLength={nodesWithConLength} />
                    :
                    <>
                        <div id="gameHeader" className="flex justify-center items-center">
                            <div id="gameMode" className="lg:flex flex-col justify-center items-center text-[80px] hidden">
                                {gameMode === "daily" ? <IoMdTimer /> : <SiApplearcade />}
                                <div className="text-xl select-none">
                                    {gameMode === "daily" ? "Daily" : "Arcade"}
                                </div>
                            </div>
                            {
                                !isWin
                                    ?
                                    <BdodleDropdown
                                        nodes={filteredNodes}
                                        submitGuess={updatedListOfGusses} />
                                    :
                                    <BdodleScoreCard
                                        numberOfAttempts={listOfGusses.length}
                                        timeToNewGame={timeToNewGame}
                                        gameMode={gameMode}
                                        resetGame={resetGame} />
                            }
                            <BdodleBouncingButton
                                blackSpiritText={blackSpiritText}
                                toggleAssist={toggleAssist}
                                setToggleAssist={setToggleAssist} />
                        </div>
                        <>
                            <BdodleAnswersTableHeader />
                            {
                                <div style={{ scrollbarWidth: "none" }} className="lg:min-h-[45vh] lg:max-h-[45vh] min-h-[40vh] max-h-[40vh] lg:mt-5 mt-2 overflow-y-scroll overflow-x-hidden">
                                    {listOfGusses.map((node, index) => {
                                        return (
                                            <div key={index} ref={itemRef}>
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