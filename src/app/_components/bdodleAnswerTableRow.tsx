'use client'
import { ArrowRightCircle, ArrowBigDown, ArrowBigUp, CheckCircle, ShieldQuestionIcon } from "lucide-react";
import { Balenos, Serendia, Calpheon, Mediah, Valencia, Kamasylvia, Drieghan, Odyllita, MountainofEternalWinter, LandofMorningLight, Ulukita } from "../imageImports";
import { City, Gateway, TradingPost, Connection, Danger, Town } from "../imageImports";
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
        const guessNodeType = node.type?.replace(/\s/g, '') ?? "";
        const correctNodeType = correctNode?.type?.replace(/\s/g, '') ?? "";
        if (guessNodeType === correctNodeType) {
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

    function validateLocation(node: Node) {
        if (node.coordinates?.[0] === correctNode?.coordinates?.[0] && node.coordinates?.[1] === correctNode?.coordinates?.[1]) {
            return "bg-green-600"
        }
        if (node.territory === correctNode?.territory) {
            return "bg-yellow-600"
        }
        return "bg-red-600";
    }

    function validateTerritory(node: Node) {
        const guessNode = node.territory?.replace(/\s/g, '') ?? "";
        const correctNodeNoSpace = correctNode?.territory?.replace(/\s/g, '') ?? "";
        if (guessNode === correctNodeNoSpace) {
            return "bg-green-600"
        }
        return "bg-red-600";
    }

    function validateIcon(node: Node, whatToValidate: string) {
        switch (whatToValidate) {
            case "CONNECTIONS":
                //@ts-ignore
                if (node.connections?.length > correctNode?.connections?.length) {
                    return <ArrowBigDown className="lg:size-32 md:size-20 size-16 md:mt-5 text-stone-900" />;
                }
                if (node.connections?.length === correctNode?.connections?.length) {
                    return <CheckCircle className="lg:size-24 md:size-20 sm:size-16 size-14 lg:mt-3 md:mt-5 text-stone-900" />;
                }
                return <ArrowBigUp className="lg:size-32 md:size-20 size-16 md:mt-5 text-stone-900" />;

            case "CONTRIBUTION":
                //@ts-ignore
                if (node.contribution > correctNode?.contribution) {
                    return <ArrowBigDown className="lg:size-32 md:size-20 size-16 md:mt-5 text-stone-900" />;
                }
                if (node.contribution === correctNode?.contribution) {
                    return <CheckCircle className="lg:size-24 md:size-20 sm:size-16 size-14 lg:mt-3 md:mt-5 text-stone-900" />;
                }
                return <ArrowBigUp className="lg:size-32 md:size-20 size-16 md:mt-5 text-stone-900" />;

            case "LOCATION":
                //@ts-ignore
                if (node.nodeOfDay) {
                    return <CheckCircle className="lg:size-24 md:size-20 sm:size-16 size-14 lg:mt-7 md:mt-3 mt-2 text-stone-900" />;
                }
                return <ArrowRightCircle style={{ rotate: calcArrowRotation() }} className="lg:size-24 md:size-20 sm:size-16 size-14 lg:mt-7 mt-3 text-stone-900" />

            default:
                return <ShieldQuestionIcon className="lg:size-32 md:size-20 size-16 md:mt-5 text-stone-900" />;
        }
    }

    function getTerritoryName(unformattedName: string) {
        switch (unformattedName) {
            case "Balenos":
                return "Balenos";
            case "Serendia":
                return "Serendia";
            case "Calpheon":
                return "Calpheon";
            case "Mediah":
                return "Mediah";
            case "Valencia":
                return "Valencia";
            case "Kamasylvia":
                return "Kamasylvia";
            case "Drieghan":
                return "Drieghan";
            case "O'dyllita":
                return "O'dyllita";
            case "MountainofEternalWinter":
                return "Mnt of E. Winter";
            case "LandofMorningLight":
                return "Land of M. Light";
            case "Ulukita":
                return "Ulukita";
            default:
                return "Unknown Territory";
        }
    }

    function calcArrowRotation() {
        //x1, y1 = Guess
        //x2, y2 = Correct
        const x1 = guessedNode.coordinates[0];
        const y1 = guessedNode.coordinates[1];

        const x2 = correctNode.coordinates[0];
        const y2 = correctNode.coordinates[1];

        const dx = x2! - x1!;
        const dy = y2! - y1!;

        const thetaRadians = Math.atan2(dy, dx);
        const thetaDegrees = thetaRadians * (180 / Math.PI);

        return thetaDegrees + "deg";
    }

    return (
        <div id="tableResults" className="min-w-full flex justify-center pb-6">
            <div style={{ animationIterationCount: 1 }} className={` ${validateName(guessedNode)} lg:size-40 md:size-36 sm:size-28 size-20 text-center text-wrap flex items-center justify-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both" : ""}`}>
                <h1 className="lg:text-lg text-wrap p-2 text-xs font-semibold flex justify-center items-center">{guessedNode.name}</h1>
            </div>
            <div style={{ animationIterationCount: 1 }} className={` ${validateType(guessedNode)} lg:size-40 md:size-36 sm:size-28 size-20 text-center text-wrap flex items-center justify-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both delay-500" : ""}`}>
                <img className="lg:size-24 md:size-20 sm:size-16 size-14" src={getNodeTypeImage(guessedNode)?.src} alt="Node Type" />
            </div>
            <div style={{ animationIterationCount: 1 }} className={` ${validateContribution(guessedNode)} lg:size-40 md:size-36 sm:size-28 size-20 text-center text-wrap flex flex-col justify-start items-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both delay-1000" : ""}`}>
                <div className="lg:text-2xl text-wrap text-xs">{guessedNode.contribution}</div>
                {validateIcon(guessedNode, "CONTRIBUTION")}
            </div>
            <div style={{ animationIterationCount: 1 }} className={` ${validateConnections(guessedNode)} lg:size-40 md:size-36 sm:size-28 size-20 text-center text-wrap flex flex-col justify-start items-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both delay-1500" : ""}`}>
                <div className="lg:text-2xl text-wrap text-xs">{guessedNode.connections.length}</div>
                {validateIcon(guessedNode, "CONNECTIONS")}
            </div>
            <div style={{ animationIterationCount: 1 }} className={` ${validateLocation(guessedNode)} lg:size-40 md:size-36 sm:size-28 size-20 text-center text-wrap flex items-center justify-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both delay-2000" : ""}`}>
                {validateIcon(guessedNode, "LOCATION")}
            </div>
            <div style={{ animationIterationCount: 1 }} className={` ${validateTerritory(guessedNode)} lg:size-40 md:size-36 sm:size-28 size-20 text-center text-wrap flex flex-col items-center justify-center border-2 border-stone-900 ${shouldPlayAnimation ? "animate-flip fill-mode-both delay-2500" : ""}`}>
                <div className="lg:text-xl lg:block text-wrap p-2 text-xs mt-1 hidden">{getTerritoryName(guessedNode.territory)}</div>
                <img className="lg:size-16 size-12 " src={getTerritoryImage(guessedNode)?.src} alt="Node Territory" />
            </div>
        </div>
    );
}

export default BdodleAnswersTableRow;