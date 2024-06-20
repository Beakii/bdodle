'use client'
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import BdodleDropdown from "./bdodleDropdown";
import BdodleAnswersTable from "./bdodleAnswersTable";

interface Node {
    id: number;
    nodeId: number | null;
    name: string | null;
    type: string | null;
    connections: number[] | null;
    coordinates: unknown;
    contribution: number | null;
    territory: string | null;
}

interface BdodleDropdownProps {
    nodes: Node[];
    correctNode: Node;
    territoryImage: StaticImageData[];
    nodeTypeImage: StaticImageData[];
}

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
                territoryImage={territoryImage}
                nodeTypeImage={nodeTypeImage} />
        </div>
    );
};

export default Game;