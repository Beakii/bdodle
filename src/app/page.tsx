'use server'
import { db } from "~/server/db";
import Balenos from "~/assets/png/territories/Balenos.webp";
import Serendia from "~/assets/png/territories/Serendia.webp";
import Calpheon from "~/assets/png/territories/Calpheon.webp";
import Mediah from "~/assets/png/territories/Mediah.webp";
import Valencia from "~/assets/png/territories/Valencia.webp";
import Kamasylvia from "~/assets/png/territories/Kamasylvia.webp";
import Drieghan from "~/assets/png/territories/Drieghan.webp";
import Odyllita from "~/assets/png/territories/O'dyllita.webp";
import MountainofEternalWinter from "~/assets/png/territories/MountainofEternalWinter.webp";
import LandofMorningLight from "~/assets/png/territories/LandofMorningLight.webp";
import Ulukita from "~/assets/png/territories/Ulukita.webp";
import City from "~/assets/png/nodeTypes/City.png";
import Gateway from "~/assets/png/nodeTypes/Gateway.png";
import TradingPost from "~/assets/png/nodeTypes/TradingPost.png";
import Connection from "~/assets/png/nodeTypes/Connection.png";
import Danger from "~/assets/png/nodeTypes/Danger.png";
import Town from "~/assets/png/nodeTypes/Town.png";
import Game from "./_components/game";
import { Node } from "./types";

export default async function HomePage() {

  const territoryImages = [
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
  ]

  const nodeTypeImages = [
    City,
    Gateway,
    TradingPost,
    Connection,
    Danger,
    Town
  ]
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
        territoryImage={territoryImages}
        nodeTypeImage={nodeTypeImages}
      />
    </main>
  );
}


