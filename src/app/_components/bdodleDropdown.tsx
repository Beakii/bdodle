'use client'
import { Balenos, Serendia, Calpheon, Mediah, Valencia, Kamasylvia, Drieghan, Odyllita, MountainofEternalWinter, LandofMorningLight, Ulukita } from "../imageImports";
import { City, Gateway, TradingPost, Connection, Danger, Town } from "../imageImports";
import BdodleInput from "./bdodleInput";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "~/components/ui/hover-card"
import { useState } from "react";
import { Node, BdodleDropdownProps } from "../types";

const BdodleDropdown = ({ nodes, submitGuess }: BdodleDropdownProps) => {
    const [inputValue, setInputValue] = useState("");

    const territoryImage = [
        Balenos,
        Serendia,
        Calpheon,
        Mediah,
        Valencia,
        Kamasylvia,
        Drieghan,
        Odyllita,
        MountainofEternalWinter,
        LandofMorningLight,
        Ulukita
    ];

    const nodeTypeImage = [
        City,
        Gateway,
        TradingPost,
        Connection,
        Danger,
        Town
    ];

    function updateInputValue(input: string) {
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
        <div className=" flex flex-col justify-center items-center xl:pt-6 pt-5">
            <BdodleInput
                getInput={updateInputValue}
                inputValue={inputValue} />
            <div className="flex">
                <ul className={`absolute lg:left-[37.5vw] lg:right-[37.5vw] left-0.5 right-0.5 max-h-[370px] bg-yellow-950 overflow-y-auto z-10 ` + (inputValue === "" ? 'hidden' : '')}>
                    {filteredNodes.map((node: Node, index: number) => (
                        <li onClick={() => submitClicked(node)} key={index} className="flex p-2 lg:pl-10 lg:pr-10 border-l-2 border-r-2 border-b-2 border-yellow-700 cursor-pointer items-center">
                            <HoverCard>
                                <HoverCardTrigger><img src={getTerritoryImage(node)?.src} alt={node.territory ?? ""} className="size-12" /></HoverCardTrigger>
                                <HoverCardContent>
                                    {node.territory}
                                </HoverCardContent>
                            </HoverCard>
                            <span className="lg:pl-10 pl-5 mr-auto">{node.name}</span>
                            <HoverCard>
                                <HoverCardTrigger><img src={getNodeTypeImage(node)?.src} alt={node.type ?? ""} className="ml-auto size-14" /></HoverCardTrigger>
                                <HoverCardContent>
                                    {node.type}
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger><div className="pl-2">{"CP: " + node.contribution}</div></HoverCardTrigger>
                                <HoverCardContent>
                                    {"Amount of Contribution Points required to invest"}
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