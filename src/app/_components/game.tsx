'use client'
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import BdodleDropdown from "./bdodleDropdown";
import BdodleAnswersTable from "./bdodleAnswersTable";
import { Node, BdodleDropdownProps } from "../types";


const Game = ({ nodes, correctNode, territoryImage, nodeTypeImage }: BdodleDropdownProps) => {
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