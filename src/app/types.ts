import { StaticImageData } from "next/image";

export interface Node {
    id: number;
    nodeId: number | null;
    name: string | null;
    type: string | null;
    connections: number[] | null;
    coordinates: unknown;
    contribution: number | null;
    territory: string | null;
}

export interface BdodleAnswerTableProps {
    nodes: Node[];
    correctNode: Node;
    territoryImage: StaticImageData[];
    nodeTypeImage: StaticImageData[];
}

export interface BdodleDropdownProps {
    nodes: Node[];
    correctNode: Node;
    territoryImage: StaticImageData[];
    nodeTypeImage: StaticImageData[];
}

export interface BdodleInputProps {
    getInput: (input: string) => void;
    inputValue: string;
}