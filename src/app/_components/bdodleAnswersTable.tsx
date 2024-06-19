'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { StaticImageData } from "next/image";
import Arrow from "~/assets/png/bdoAssets/Arrow.png";
interface Coordinates {
    x: number;
    y: number;
}

interface Node {
    id: number;
    nodeId: number | null;
    name: string | null;
    type: string | null;
    connections: number[] | null;
    coordinates: Coordinates;
    contribution: number | null;
    territory: string | null;
}

interface BdodleDropdownProps {
    nodes: Node[];
    territoryImage: StaticImageData[];
    nodeTypeImage: StaticImageData[];
}

const BdodleAnswersTable = ({ nodes, territoryImage, nodeTypeImage }: BdodleDropdownProps) => {

    function getTerritoryImage(node: Node) {
        node.territory = node.territory?.replace(/\s/g, '') ?? "";
        return territoryImage.find((imageStaticData) => imageStaticData.src.toLowerCase().includes(node.territory?.toLowerCase() ?? ""));
    }

    function getNodeTypeImage(node: Node) {
        node.type = node.type?.replace(/\s/g, '') ?? "";
        return nodeTypeImage.find((imageStaticData) => imageStaticData.src.toLowerCase().includes(node.type?.toLowerCase() ?? ""));
    }

    return (
        <div id="results" className="grid-flow-row gap-10 mt-[75]">
            <div id="tableHeader" className="flex gap-5">
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
                nodes?.map((node: Node, index: number) => (
                    <div key={index} id="tableResults" className="flex gap-5">
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
                                    <CardDescription>t</CardDescription>
                                    <img src={getNodeTypeImage(node)?.src} alt="Node Type" />
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardContent>
                                    <CardDescription></CardDescription>
                                    <img src={Arrow.src} alt="Location" />
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardContent>
                                    <div className="">{node.connections?.length}</div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Territory</CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
};

export default BdodleAnswersTable;