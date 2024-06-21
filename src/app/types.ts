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
}

export interface BdodleAnswerTableProps {
    userListOfGuesses: Node[];
    correctNode: Node | undefined;
}

export interface BdodleDropdownProps {
    nodes: Node[];
    submitGuess: (node: Node) => void;
}

export interface BdodleInputProps {
    getInput: (input: string) => void;
    inputValue: string;
}