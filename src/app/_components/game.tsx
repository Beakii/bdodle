'use client'
import { useState } from "react";
import BdodleDropdown from "./bdodleDropdown";
import BdodleAnswersTable from "./bdodleAnswersTable";
import { Node, GameProps } from "../types";


const Game = ({ nodes, correctNode, territoryImage, nodeTypeImage }: GameProps) => {
    const [listOfGusses, setListOfGusses] = useState<Node[]>([]);

    function updatedListOfGusses(node: Node) {
        setListOfGusses([...listOfGusses, node]);
    }

    return (
        <div>
            <BdodleDropdown
                nodes={nodes}
                territoryImage={territoryImage}
                nodeTypeImage={nodeTypeImage}
                submitGuess={updatedListOfGusses} />
            <BdodleAnswersTable
                nodes={listOfGusses}
                correctNode={correctNode}
                territoryImage={territoryImage}
                nodeTypeImage={nodeTypeImage} />
        </div>
    );
};

export default Game;