'use client'
import { Balenos, Serendia, Calpheon, Mediah, Valencia, Kamasylvia, Drieghan, Odyllita, MountainofEternalWinter, LandofMorningLight, Ulukita } from "../imageImports";
import { City, Gateway, TradingPost, Connection, Danger, Town } from "../imageImports";
import Arrow from "~/assets/png/bdoAssets/Arrow.png";
import { Node, BdodleAnswerTableRowProps } from "../types";

export const dynamic = "force-dynamic";
const BdodleAnswersTableRow = ({ guessedNode, correctNode, shouldPlayAnimation }: BdodleAnswerTableRowProps) => {

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
        <div id="tableResults" className="min-w-full flex justify-center lg:pb-6">
            <div style={{ animationIterationCount: 1 }} className={` ${validateName(guessedNode)} lg:mt-5 lg:min-w-[10vw] lg:max-w-[10vw] text-center text-wrap min-w-[20vw] lg:min-h-[vh] flex items-center justify-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both" : ""}`}>
                <h1 className="lg:text-lg text-wrap p-2 text-xs font-semibold flex justify-center items-center">{guessedNode.name}</h1>
            </div>
            <div style={{ animationIterationCount: 1 }} className={` ${validateType(guessedNode)} lg:mt-5 lg:min-w-[10vw] lg:max-w-[10vw] text-center text-wrap min-w-[20vw] lg:min-h-[vh] flex items-center justify-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both delay-1000" : ""}`}>
                <img className="lg:size-24 size-16" src={getNodeTypeImage(guessedNode)?.src} alt="Node Type" />
            </div>
            <div style={{ animationIterationCount: 1 }} className={` ${validateContribution(guessedNode)} lg:mt-5 lg:min-w-[10vw] lg:max-w-[10vw] text-center text-wrap min-w-[20vw] lg:min-h-[vh] flex flex-col justify-center items-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both delay-2000" : ""}`}>
                <div className="lg:text-2xl text-wrap p-2 text-xs mt-1">{guessedNode.contribution}</div>
                <img className={`lg:size-24 size-16`} style={{ transform: getRotationString(guessedNode, "CONTRIBUTION") }} src={Arrow.src} alt="Node Contributions" />
            </div>
            <div style={{ animationIterationCount: 1 }} className={` ${validateConnections(guessedNode)} lg:mt-5 lg:min-w-[10vw] lg:max-w-[10vw] text-center text-wrap min-w-[20vw] lg:min-h-[vh] flex flex-col justify-center items-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both delay-3000" : ""}`}>
                <div className="lg:text-2xl text-wrap p-2 text-xs mt-1">{guessedNode.connections.length}</div>
                <img className={`lg:size-24 size-16`} style={{ transform: getRotationString(guessedNode, "CONNECTIONS") }} src={Arrow.src} alt="Node Connections" />
            </div>
            <div style={{ animationIterationCount: 1 }} className={` ${validateTerritory(guessedNode)} lg:mt-5 lg:min-w-[10vw] lg:max-w-[10vw] text-center text-wrap min-w-[18.5vw] lg:min-h-[vh] flex items-center justify-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both delay-4000" : ""}`}>
                <img className="lg:size-24 size-14" src={getTerritoryImage(guessedNode)?.src} alt="Node Territory" />
            </div>
        </div>
    );
}

export default BdodleAnswersTableRow;