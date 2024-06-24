'use client'
import { Balenos, Serendia, Calpheon, Mediah, Valencia, Kamasylvia, Drieghan, Odyllita, MountainofEternalWinter, LandofMorningLight, Ulukita } from "../imageImports";
import { City, Gateway, TradingPost, Connection, Danger, Town } from "../imageImports";
import Arrow from "~/assets/png/bdoAssets/Arrow.png";
import { useEffect, useState } from "react";
import { Node, BdodleAnswerTableProps } from "../types";

export const dynamic = "force-dynamic";
const BdodleAnswersTable = ({ userListOfGuesses, correctNode, }: BdodleAnswerTableProps) => {
    const [answerTable, setAnswerTable] = useState<Node[]>([]);

    // Handle new guesses and check for win condition
    useEffect(() => {
        if (userListOfGuesses.length !== 0) {
            setAnswerTable([...userListOfGuesses]);
        }
    }, [userListOfGuesses]);

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


    function getTerritoryImage(node: Node) {
        node.territory = node.territory?.replace(/\s/g, '') ?? "";
        return territoryImage.find((imageStaticData) => imageStaticData.src.toLowerCase().includes(node.territory?.toLowerCase() ?? ""));
    }

    function getNodeTypeImage(node: Node) {
        node.type = node.type?.replace(/\s/g, '') ?? "";
        return nodeTypeImage.find((imageStaticData) => imageStaticData.src.toLowerCase().includes(node.type?.toLowerCase() ?? ""));
    }

    function validateName(node: Node) {
        if (node.name === correctNode?.name) {
            return "bg-green-600"
        }
        const containsWord = correctNode?.name?.split(' ').some(word => node.name?.includes(word));
        if (containsWord) {
            return "bg-yellow-600";
        }
        return "bg-red-600";
    }

    function validateType(node: Node) {
        if (node.type === correctNode?.type) {
            return "bg-green-600"
        }
        return "bg-red-600";
    }

    function validateContribution(node: Node) {
        if (node.contribution === correctNode?.contribution) {
            return "bg-green-600"
        }
        if (Math.abs(node.contribution - correctNode?.contribution) <= 1) {
            return "bg-yellow-600";
        }
        return "bg-red-600";
    }

    function validateConnections(node: Node) {
        if (node.connections.length === correctNode?.connections.length) {
            return "bg-green-600"
        }
        if (Math.abs(node.connections.length - correctNode?.connections.length) <= 1) {
            return "bg-yellow-600";
        }
        return "bg-red-600";
    }

    function validateTerritory(node: Node) {
        if (node.territory === correctNode?.territory) {
            return "bg-green-600"
        }
        return "bg-red-600";
    }


    function getRotationString(node: Node, whatToValidate: string) {
        switch (whatToValidate) {
            case "CONNECTIONS":
                //@ts-ignore
                if (node.connections?.length > correctNode?.connections?.length) {
                    return "rotate(180deg)";
                }
                if (node.connections?.length === correctNode?.connections?.length) {
                    return "rotate(90deg)";
                }
                return "rotate(0deg)";

            case "CONTRIBUTION":
                //@ts-ignore
                if (node.contribution > correctNode?.contribution) {
                    return "rotate(180deg)";
                }
                if (node.contribution === correctNode?.contribution) {
                    return "rotate(90deg)";
                }
                return "rotate(0deg)";
            default:
                return "rotate(0deg)";
        }
    }


    return (
        <div id="results" className="pt-10">
            <div id="tableHeader" className="min-w-full flex justify-center lg:gap-5">
                <div className="lg:mt-5 mt-1 lg:min-w-[10vw] min-w-[20vw] h-[4vh] flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Name</h1>
                </div>
                <div className="lg:mt-5 mt-1 lg:min-w-[10vw] min-w-[20vw] h-[4vh] flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Type</h1>
                </div>
                <div className="lg:mt-5 mt-1 lg:min-w-[10vw] min-w-[20vw] h-[4vh] flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Contribution</h1>
                </div>
                <div className="lg:mt-5 mt-1 lg:min-w-[10vw] min-w-[20vw] h-[4vh] flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Connection</h1>
                </div>
                <div className="lg:mt-5 mt-1 lg:min-w-[10vw] min-w-[18.6vw] h-[4vh] flex items-center justify-center border-2 border-yellow-700 bg-yellow-950">
                    <h1 className="lg:text-lg md:text-sm text-xs font-semibold">Territory</h1>
                </div>
            </div>
            {
                answerTable.length === 0
                    ?
                    null
                    :
                    answerTable.map((node: Node, index: number) => (
                        <div key={index} id="tableResults" className="min-w-full flex justify-center lg:gap-5">
                            <div style={{ animationIterationCount: 1 }} className={`animate-flip fill-mode-both ${validateName(node)} lg:mt-5 lg:min-w-[10vw] lg:max-w-[10vw] text-center text-wrap min-w-[20vw] lg:min-h-[vh] flex items-center justify-center border-2 border-yellow-700`}>
                                <h1 className="lg:text-lg text-wrap p-2 text-xs font-semibold flex justify-center items-center">{node.name}</h1>
                            </div>
                            <div style={{ animationIterationCount: 1 }} className={`animate-flip delay-1000 fill-mode-both ${validateType(node)} lg:mt-5 lg:min-w-[10vw] lg:max-w-[10vw] text-center text-wrap min-w-[20vw] lg:min-h-[vh] flex items-center justify-center border-2 border-yellow-700`}>
                                <img className="lg:size-24 size-16" src={getNodeTypeImage(node)?.src} alt="Location" />
                            </div>
                            <div style={{ animationIterationCount: 1 }} className={`animate-flip delay-2000 fill-mode-both ${validateContribution(node)} lg:mt-5 lg:min-w-[10vw] lg:max-w-[10vw] text-center text-wrap min-w-[20vw] lg:min-h-[vh] flex flex-col justify-center items-center border-2 border-yellow-700`}>
                                <div className="lg:text-2xl text-wrap p-2 text-xs mt-1">{node.contribution}</div>
                                <img className={`lg:size-24 size-16`} style={{ transform: getRotationString(node, "CONTRIBUTION") }} src={Arrow.src} alt="Location" />
                            </div>
                            <div style={{ animationIterationCount: 1 }} className={`animate-flip delay-3000 fill-mode-both ${validateConnections(node)} lg:mt-5 lg:min-w-[10vw] lg:max-w-[10vw] text-center text-wrap min-w-[20vw] lg:min-h-[vh] flex flex-col justify-center items-center border-2 border-yellow-700`}>
                                <div className="lg:text-2xl text-wrap p-2 text-xs mt-1">{node.contribution}</div>
                                <img className={`lg:size-24 size-16`} style={{ transform: getRotationString(node, "CONNECTIONS") }} src={Arrow.src} alt="Location" />
                            </div>
                            <div style={{ animationIterationCount: 1 }} className={`animate-flip delay-4000 fill-mode-both ${validateTerritory(node)} lg:mt-5 lg:min-w-[10vw] lg:max-w-[10vw] text-center text-wrap min-w-[18.5vw] lg:min-h-[vh] flex items-center justify-center border-2 border-yellow-700`}>
                                <img className="lg:size-24 size-14" src={getTerritoryImage(node)?.src} alt="Location" />
                            </div>
                        </div>
                    ))
            }
        </div>
    );
};

export default BdodleAnswersTable;