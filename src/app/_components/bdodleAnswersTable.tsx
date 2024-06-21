'use client'
import { Balenos, Serendia, Calpheon, Mediah, Valencia, Kamasylvia, Drieghan, Odyllita, MountainofEternalWinter, LandofMorningLight, Ulukita } from "../imageImports";
import { City, Gateway, TradingPost, Connection, Danger, Town } from "../imageImports";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import Arrow from "~/assets/png/bdoAssets/Arrow.png";
import { useEffect, useState } from "react";
import { Node, BdodleAnswerTableProps } from "../types";

export const dynamic = "force-dynamic";
const BdodleAnswersTable = ({ userListOfGuesses, correctNode, }: BdodleAnswerTableProps) => {
    const [answerTable, setAnswerTable] = useState<Node[]>([]);

    // Handle new guesses and check for win condition
    useEffect(() => {
        if (userListOfGuesses.length !== 0) {
            console.log("I AM SETTING ANSWER TABLE FROM LISTENING TO USERLIST WITH:")
            console.log([...userListOfGuesses])
            setAnswerTable([...userListOfGuesses]);
            localStorage.setItem('guessHistory', JSON.stringify(userListOfGuesses));
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
            return "bg-[#005E00]"
        }
        const containsWord = correctNode?.name?.split(' ').some(word => node.name?.includes(word));
        if (containsWord) {
            return "bg-[#b3932c]";
        }
        return "bg-[#900100]";
    }

    function validateType(node: Node) {
        return node.type === correctNode?.type;
    }

    function validateContribution(node: Node) {
        return node.contribution === correctNode?.contribution;
    }

    function validateConnections(node: Node) {
        return node.connections?.length === correctNode?.connections?.length;
    }

    function validateTerritory(node: Node) {
        return node.territory === correctNode?.territory;
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
        <div id="results" className=" gap-10 mt-[75]">
            <div id="tableHeader" className="min-w-full flex justify-between gap-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Name</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Type</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Contribution</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Connections</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Territory</CardTitle>
                    </CardHeader>
                </Card>
            </div>
            {
                answerTable.length === 0
                    ?
                    null
                    :
                    answerTable.map((node: Node, index: number) => (
                        <div key={index} id="tableResults" className="w-full justify-between flex gap-3">
                            <Card className={validateName(node)}>
                                <CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-extrabold">{node.name}</div>
                                    </CardContent>
                                </CardHeader>
                            </Card>
                            <Card className={validateType(node) ? 'bg-[#005E00]' : 'bg-[#900100]'}>
                                <CardHeader>
                                    <CardContent>
                                        <img className="h-24 w-24" src={getNodeTypeImage(node)?.src} alt="Location" />
                                    </CardContent>
                                </CardHeader>
                            </Card>
                            <Card className={validateContribution(node) ? 'bg-[#005E00]' : `bg-[#900100]`}>
                                <CardHeader>
                                    <CardContent>
                                        <div className="text-2xl flex pt-5 justify-center items-center">{node.contribution}</div>
                                        <img style={{ transform: getRotationString(node, "CONTRIBUTION") }} className={`h-24 w-24`} src={Arrow.src} alt="Location" />
                                    </CardContent>
                                </CardHeader>
                            </Card>
                            <Card className={validateConnections(node) ? 'bg-[#005E00]' : 'bg-[#900100]'}>
                                <CardHeader>
                                    <CardContent>
                                        <div className="text-2xl flex pt-5 justify-center items-center">{node.connections?.length}</div>
                                        <img style={{ transform: getRotationString(node, "CONNECTIONS") }} className={`h-24 w-24`} src={Arrow.src} alt="Location" />
                                    </CardContent>
                                </CardHeader>
                            </Card>
                            <Card className={validateTerritory(node) ? 'bg-[#005E00]' : 'bg-[#900100]'}>
                                <CardHeader>
                                    <CardContent>
                                        <img className="h-24 w-24 p-3" src={getTerritoryImage(node)?.src} alt="Location" />
                                    </CardContent>
                                </CardHeader>
                            </Card>
                        </div>
                    ))
            }
        </div>
    );
};

export default BdodleAnswersTable;