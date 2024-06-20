'use client'
import { StaticImageData } from "next/image";
import BdodleInput from "./bdodleInput";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "~/components/ui/hover-card"
import { useState } from "react";

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
    territoryImage: StaticImageData[];
    nodeTypeImage: StaticImageData[];
    submitGuess: (node: Node) => void;
}

const BdodleDropdown = ({ nodes, territoryImage, nodeTypeImage, submitGuess }: BdodleDropdownProps) => {
    const [inputValue, setInputValue] = useState("  ");

    function updateInputValue(input: string) {
        if (input === "") {

            setInputValue("  ");
            return;
        }
        setInputValue(input)
    }

    function getTerritoryImage(node: Node) {
        node.territory = node.territory?.replace(/\s/g, '') ?? "";
        return territoryImage.find((imageStaticData) => imageStaticData.src.toLowerCase().includes(node.territory?.toLowerCase() ?? ""));
    }

    function getNodeTypeImage(node: Node) {
        node.type = node.type?.replace(/\s/g, '') ?? "";
        return nodeTypeImage.find((imageStaticData) => imageStaticData.src.toLowerCase().includes(node.type?.toLowerCase() ?? ""));
    }

    function submitClicked(node: Node) {
        submitGuess(node);
        updateInputValue("");
    }

    const filteredNodes = nodes.filter((node: Node) => node.name?.toLowerCase().includes(inputValue.toLowerCase()));

    return (
        <div className="">
            <BdodleInput getInput={updateInputValue} />
            <div className="flex">
                <ul className="bg-yellow-950 overflow-y-auto max-h-[400px] absolute z-10">
                    {filteredNodes.map((node: Node, index: number) => (
                        <li onClick={() => submitClicked(node)} key={index} className="flex p-3 pl-10 pr-10 border border-yellow-700 cursor-pointer items-center">
                            <HoverCard>
                                <HoverCardTrigger><img src={getTerritoryImage(node)?.src} alt={node.territory ?? ""} className="w-10 h-10" /></HoverCardTrigger>
                                <HoverCardContent>
                                    {node.territory}
                                </HoverCardContent>
                            </HoverCard>
                            <span className="pl-10 mr-auto">{node.name}</span>
                            <HoverCard>
                                <HoverCardTrigger><img src={getNodeTypeImage(node)?.src} alt={node.type ?? ""} className="ml-auto w-10 h-10" /></HoverCardTrigger>
                                <HoverCardContent>
                                    {node.type}
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BdodleDropdown;