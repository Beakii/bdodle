'use server'
import { db } from "~/server/db";
import Game from "./_components/game";
import { Node } from "./types";
import BdodleAssistTool from "./_components/bdodleAssistTool";
import BdodleBouncingButton from "./_components/bdodleBouncingButton";

export default async function HomePage() {
  //@ts-ignore
  const nodes: Node[] = await db.query.nodes.findMany();
  nodes.sort((a, b) => (a?.nodeId || 0) - (b?.nodeId || 0));
  const correctNode: Node = nodes.find(node => node.nodeOfDay === true)!;

  // const nodes: Node[] = [];
  // const correctNode: Node = {};

  return (
    <>
      <main className="flex flex-col min-w-full">

        <div className=" lg:w-[70vw] w-full h-full">
          <Game
            nodes={nodes}
            correctNode={correctNode}
          />
        </div>
      </main>
    </>
  );
}


