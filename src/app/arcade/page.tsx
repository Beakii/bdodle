'use server'
import Game from "../_components/game";
import { Node } from "../types";
import { getAllNodes } from "~/server/queries";
import { unstable_noStore as noStore } from 'next/cache'

export default async function HomePage() {
    noStore();
    //@ts-ignore
    let nodes: Node[] = await getAllNodes();
    nodes.sort((a, b) => (a?.nodeId || 0) - (b?.nodeId || 0));

    const randomIndex = Math.floor(Math.random() * nodes.length - 1);
    nodes.forEach((node, index) => {
        node.nodeOfDay = index === randomIndex ? true : false;
    });

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
                        gameMode="arcade"
                    />
                </div>
            </main>
        </>
    );
}


