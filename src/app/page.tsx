import { db } from "~/server/db";
import { nodes } from "~/server/db/schema";
const fs = require('fs');

export const dynamic = "force-dynamic";

const mockNodes = [
  {
    "NodeId": 1,
    "NodeName": "Velia",
    "NodeType": "City",
    "NodeConnections": [
      21,
      22,
      26,
      43,
      46,
      102,
      103,
      1018
    ],
    "Coordinates": {
      "x": 13799.6,
      "y": 76995.8
    },
    "ReqContribution": 0,
    "Territory": "Balenos"
  },
  {
    "NodeId": 2,
    "NodeName": "Western Guard Camp",
    "NodeType": "Town",
    "NodeConnections": [
      4,
      5,
      25,
      45
    ],
    "Coordinates": {
      "x": -61936.7,
      "y": 44013.9
    },
    "ReqContribution": 1,
    "Territory": "Balenos"
  },
  {
    "NodeId": 3,
    "NodeName": "Cron Castle",
    "NodeType": "Danger",
    "NodeConnections": [
      41
    ],
    "Coordinates": {
      "x": 11273,
      "y": 122779
    },
    "ReqContribution": 2,
    "Territory": "Balenos"
  },
  {
    "NodeId": 4,
    "NodeName": "Western Gateway",
    "NodeType": "Gateway",
    "NodeConnections": [
      2,
      49,
      66
    ],
    "Coordinates": {
      "x": -82191,
      "y": 51588.4
    },
    "ReqContribution": 3,
    "Territory": "Balenos"
  },
  {
    "NodeId": 5,
    "NodeName": "Bandit's Den Byway",
    "NodeType": "Gateway",
    "NodeConnections": [
      2,
      48,
      371
    ],
    "Coordinates": {
      "x": -70797.2,
      "y": -4113.7
    },
    "ReqContribution": 3,
    "Territory": "Serendia"
  },
];

const mockData = mockNodes.map((node, index) => ({
  id: index + 1,
  node
}));

export default async function HomePage() {

  const nodes = await db.query.nodes.findMany();
  nodes.sort((a, b) => (a?.nodeId || 0) - (b?.nodeId || 0));

  return (
    <main className="">
      <div className="flex flex-wrap">
        <ul>
          {nodes.map((node, index) => (
            <div key={index} className="flex flex-wrap">
              <li>{node.territory}</li>
              <li>{node.name}</li>
              <li>{node.type}</li>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
