'use client'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import Arrow from "~/assets/png/bdoAssets/Arrow.png";
import { useEffect, useState } from "react";
import { Node, BdodleAnswerTableProps } from "../types";
import { set } from "zod";

export const dynamic = "force-dynamic";
const BdodleAnswersTable = ({ nodes, territoryImage, nodeTypeImage, correctNode }: BdodleAnswerTableProps) => {
    const [listOfGusses, setListOfGusses] = useState<Node[]>([]);
    const [isWin, setIsWin] = useState(false);

    //ALL THE STATE NEEDS TO BE REVIEW AND REFACTORED
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //This gets called when a user clicks on a node form the list to submit a guess & on component mount
    useEffect(() => {
        console.log("a new node has been submitted to the answers table")
        if (listOfGusses.length !== 0) {
            setListOfGusses([...listOfGusses, ...nodes])
        }
        else {
            setListOfGusses(nodes);
        }
    }, [nodes]);

    //This gets called when isWin changes & on component mount
    useEffect(() => {
        console.log("iswin is called")
        console.log(isWin)
        const storeWinnerObject = localStorage.getItem("winner");
        const storeListOfNodes = localStorage.getItem("nodes");
        //If they won and are returning to the page
        if (storeWinnerObject && !isWin) {
            //Eventually add a check to clear the local storage if the time is === reset time
            const winner = JSON.parse(storeWinnerObject);
            setIsWin(winner);
            setListOfGusses(JSON.parse(storeWinnerObject));
            return;
        }

        if (!storeWinnerObject && isWin) {
            localStorage.clear();
            localStorage.setItem("winner", JSON.stringify(nodes[nodes.length - 1]));
            return;
        }

        if (!storeWinnerObject && !isWin && storeListOfNodes) {
            console.log("iswin is false and there are nodes in local storage")
            setListOfGusses(JSON.parse(storeListOfNodes));
            return;
        }

    }, [isWin]);


    //This gets called when ListOfGuesses changes
    useEffect(() => {
        if (nodes[nodes.length - 1]?.name === correctNode?.name) {
            console.log("the last node submitted is correct")
            setIsWin(true);
        }
        if (listOfGusses.length !== 0) {
            localStorage.setItem("nodes", JSON.stringify(listOfGusses));
            console.log("the list of nodes is not empty and im saving it to local storage")
        }
    }, [listOfGusses]);

    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////


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
                listOfGusses?.map((node: Node, index: number) => (
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