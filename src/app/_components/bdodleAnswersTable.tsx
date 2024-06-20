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

const BdodleAnswersTable = ({ nodes, territoryImage, nodeTypeImage }: BdodleDropdownProps) => {
    const [listOfGusses, setListOfGusses] = useState(nodes || []);

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
                        <Card>
                            <CardHeader>
                                <CardContent>
                                    <div className="">{node.name}</div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardContent>
                                    <img className="h-24 w-24" src={getNodeTypeImage(node)?.src} alt="Location" />
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardContent>
                                    <img className="h-24 w-24" src={Arrow.src} alt="Location" />
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardContent>
                                    <div className="text-2xl">{node.connections?.length}</div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card>
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