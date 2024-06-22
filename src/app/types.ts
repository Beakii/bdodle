//Type Interfaces

export interface Node {
    id: number;
    nodeId: number;
    name: string;
    type: string;
    connections: number[];
    coordinates: { x: number, y: number };
    contribution: number;
    territory: string;
    nodeOfDay: boolean | null; //nodeOfDay is stored in DB as true or null
}

export interface GameProps {
    nodes: Node[];
    correctNode: Node;
}

export interface BdodleAnswerTableProps {
    userListOfGuesses: Node[];
    correctNode: Node;
}

export interface BdodleDropdownProps {
    nodes: Node[];
    submitGuess: (node: Node) => void;
}

export interface BdodleInputProps {
    getInput: (input: string) => void;
    inputValue: string;
}

export interface BdodleScoreCardProps {
    numberOfAttempts: number;
    timeToNewGame: number;
}

export interface BdodleBouncingButtonProps {
    isWin: boolean;
}