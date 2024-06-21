'use client'
import { use, useEffect, useState } from "react";
import BdodleDropdown from "./bdodleDropdown";
import BdodleAnswersTable from "./bdodleAnswersTable";
import { Node, GameProps } from "../types";


const Game = ({ nodes, correctNode }: GameProps) => {
    const [listOfGusses, setListOfGusses] = useState<Node[]>([]);
    const [isWin, setIsWin] = useState(false);


    // Load from local storage on component mount
    useEffect(() => {
        const storedGuesses = localStorage.getItem('guessHistory');

        if (storedGuesses) {
            const storedList = JSON.parse(storedGuesses)
            console.log("I AM SETTING ANSWER TABLE WITH:")
            console.log(storedList)
            setListOfGusses(storedList);

            storedList.forEach((element: Node) => {
                if (element.nodeOfDay) {
                    setIsWin(true);
                }
            });
        }
    }, []);

    useEffect(() => {
        if (isWin) {
            console.log("YOU WIN");
        }
    }, [isWin]);

    useEffect(() => {
        if (listOfGusses[listOfGusses.length - 1]?.nodeOfDay) {
            setIsWin(true);
        }
    }, [listOfGusses]);

    function updatedListOfGusses(node: Node) {
        setListOfGusses([...listOfGusses, node]);
        console.log("PRINTING THE LIST OF GUSSES FROM THE GAME COMPONENT")
        console.log(listOfGusses);
    }

    return (
        <div>
            {
                !isWin
                    ?
                    <BdodleDropdown
                        nodes={nodes}
                        submitGuess={updatedListOfGusses} />
                    :
                    <div>Replace this with some score card component + timer</div>
            }

            <BdodleAnswersTable
                userListOfGuesses={listOfGusses}
                correctNode={correctNode} />
        </div>
    );
};

export default Game;