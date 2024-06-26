import { db } from "~/server/db";
import Game from "./_components/game";
import { Node } from "./types";

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  //@ts-ignore
  const nodes: Node[] = await db.query.nodes.findMany();
  nodes.sort((a, b) => (a?.nodeId || 0) - (b?.nodeId || 0));
  const correctNode: Node = nodes.find(node => node.nodeOfDay === true)!;
  const nodesWithConLength = nodes.map(node => {
    return {
      ...node,
      connections: node.connections.length
    }
  });

  // const nodes: Node[] = [];
  // const correctNode: Node = {};

  return (
    <>
      <main className="flex flex-col min-w-full">

        <div className=" lg:w-[70vw] w-full h-full">
          <Game
            nodesWithConLength={nodesWithConLength}
            nodes={nodes}
            correctNode={correctNode}
          />
        </div>
      </main>
    </>
  );
}


