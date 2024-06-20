'use client'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { StaticImageData } from "next/image";
import Arrow from "~/assets/png/bdoAssets/Arrow.png";
import { useEffect, useState } from "react";
import { Node, BdodleAnswerTableProps } from "../types";


const BdodleAnswersTable = ({ nodes, territoryImage, nodeTypeImage, correctNode }: BdodleAnswerTableProps) => {
    const [listOfGusses, setListOfGusses] = useState(nodes || []);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        setListOfGusses(nodes)
    }, [nodes]);

    function getTerritoryImage(node: Node) {
        node.territory = node.territory?.replace(/\s/g, '') ?? "";
        return territoryImage.find((imageStaticData) => imageStaticData.src.toLowerCase().includes(node.territory?.toLowerCase() ?? ""));
    }

    function getNodeTypeImage(node: Node) {
        node.type = node.type?.replace(/\s/g, '') ?? "";
        return nodeTypeImage.find((imageStaticData) => imageStaticData.src.toLowerCase().includes(node.type?.toLowerCase() ?? ""));
    }

    function validateName(node: Node) {
        return node.name === correctNode.name;
    }

    function validateType(node: Node) {
        return node.type === correctNode.type;
    }

    function validatePosition(node: Node) {
        //TODO calculate the angle of the vector between the two nodes, return a rotation degrees

        return false
    }

    function validateConnections(node: Node) {
        return node.connections?.length === correctNode.connections?.length;
    }

    function validateTerritory(node: Node) {
        return node.territory === correctNode.territory;
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
                        <CardTitle>Location</CardTitle>
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
                        <Card className={validateName(node) ? 'bg-[#005E00]' : 'bg-[#900100]'}>
                            <CardHeader>
                                <CardContent>
                                    <div className="">{node.name}</div>
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
                        <Card className={validatePosition(node) ? 'bg-[#005E00]' : 'bg-[#900100]'}>
                            <CardHeader>
                                <CardContent>
                                    <img className="h-24 w-24" src={Arrow.src} alt="Location" />
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card className={validateConnections(node) ? 'bg-[#005E00]' : 'bg-[#900100]'}>
                            <CardHeader>
                                <CardContent>
                                    <div className="text-2xl">{node.connections?.length}</div>
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