import { StaticImageData } from "next/image";

export interface Node {
    id: number;
    nodeId: number | null;
    name: string | null;
    type: string | null;
    connections: number[] | null;
    coordinates: { x: number, y: number };
    contribution: number | null;
    territory: string | null;
    nodeOfDay: boolean | null;
}

export interface GameProps {
    nodes: Node[];
    correctNode: Node | undefined;
    territoryImage: StaticImageData[];
    nodeTypeImage: StaticImageData[];
}

export interface BdodleAnswerTableProps {
    nodes: Node[];
    correctNode: Node | undefined;
    territoryImage: StaticImageData[];
    nodeTypeImage: StaticImageData[];
}

export interface BdodleDropdownProps {
    nodes: Node[];
    territoryImage: StaticImageData[];
    nodeTypeImage: StaticImageData[];
    submitGuess: (node: Node) => void;
}

export interface BdodleInputProps {
    getInput: (input: string) => void;
    inputValue: string;
}