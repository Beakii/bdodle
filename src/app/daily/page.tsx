'use server'
import Game from "../_components/game";
import { Node } from "../types";
import { unstable_noStore as noStore } from 'next/cache'
import { getAllNodes } from "~/server/queries";

export default async function HomePage() {
    noStore();

    //@ts-ignore
    const nodes: Node[] = await getAllNodes();
    nodes.sort((a, b) => (a?.nodeId || 0) - (b?.nodeId || 0));
    const correctNode: Node = nodes.find(node => node.nodeOfDay === true)!;
    const nodesWithConLength = nodes.map(node => {
        return {
            ...node,
            connections: node.connections.length
        }
    });

    return (
        <>
            <main className="flex flex-col min-w-full">
                <div className=" lg:w-[70vw] w-full h-full">
                    <Game
                        nodesWithConLength={nodesWithConLength}
                        nodes={nodes}
                        correctNode={correctNode}
                        gameMode="daily"
                    />
                </div>
            </main>
        </>
    );
}


