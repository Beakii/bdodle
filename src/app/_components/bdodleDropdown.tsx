'use client'
import { StaticImageData } from "next/image";
import BdodleInput from "./bdodleInput";
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
}

const BdodleDropdown = ({ nodes, territoryImage, nodeTypeImage }: BdodleDropdownProps) => {
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

    const filteredNodes = nodes.filter((node: Node) => node.name?.toLowerCase().includes(inputValue.toLowerCase()));

    return (
        <div className="w-full">
            <BdodleInput getInput={updateInputValue} />
            <div className="bg-yellow-950 flex flex-wrap">
                <ul className="w-full">
                    {filteredNodes.map((node: Node, index: number) => (
                        <li key={index} className="flex flex-wrap p-3 pl-10 pr-10 border border-yellow-700 cursor-pointer items-center">
                            <img src={getTerritoryImage(node)?.src} alt={node.territory ?? ""} className="w-10 h-10" />
                            <span className="pl-10 mr-auto">{node.name}</span>
                            <img src={getNodeTypeImage(node)?.src} alt={node.type ?? ""} className="ml-auto w-10 h-10" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BdodleDropdown;