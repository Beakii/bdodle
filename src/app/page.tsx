'use server'
import { db } from "~/server/db";
import Game from "./_components/game";
import { Node } from "./types";

export default async function HomePage() {
  //@ts-ignore
  const nodes: Node[] = await db.query.nodes.findMany();
  nodes.sort((a, b) => (a?.nodeId || 0) - (b?.nodeId || 0));


  //ADD A DB CALL TO GET A RANDOM NODE HERE AND CACHE IT IN LOCAL STORAGE WHEN PASSED INTO COMPONENT
  const mockCorrectNode: Node | undefined = nodes.find(node => node.nodeOfDay === true);

  return (
    <main className="">
      <Game
        nodes={nodes}
        correctNode={mockCorrectNode}
      />
    </main>
  );
}


