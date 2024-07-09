//Type Interfaces

export interface Node {
    id: number;
    nodeId: number;
    name: string;
    type: string;
    connections: number[];
    coordinates: number[];
    contribution: number;
    territory: string;
    nodeOfDay: boolean | null; //nodeOfDay is stored in DB as true or null
}
export interface NodeWithLength {
    id: number;
    nodeId: number;
    name: string;
    type: string;
    connections: number;
    coordinates: number[];
    contribution: number;
    territory: string;
    nodeOfDay: boolean | null; //nodeOfDay is stored in DB as true or null
}

export interface GameProps {
    nodes: Node[];
    correctNode: Node;
    nodesWithConLength: NodeWithLength[];
    gameMode: string;
}

export interface BdodleAnswerTableRowProps {
    shouldPlayAnimation: boolean;
    guessedNode: Node;
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
    gameMode: string;
    resetGame: () => void;
}

export interface BdodleBouncingButtonProps {
    toggleAssist: boolean;
    setToggleAssist: (toggle: boolean) => void;
    blackSpiritText: string;
}

export interface BdodleAssistToolProps {
    nodesWithConLength: NodeWithLength[];
    setToggleAssist: (toggle: boolean) => void;
}