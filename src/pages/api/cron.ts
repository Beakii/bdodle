'use server'
import { db } from "~/server/db";
import { Node } from "~/app/types";
import { nodes } from "~/server/db/schema";
import { eq } from "drizzle-orm";

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).end('Unauthorized');
    }
    //@ts-ignore
    const listOfNodes: Node[] = await db.query.nodes.findMany();
    const currentCorrectNode: Node = listOfNodes.find(node => node.nodeOfDay === true)!;

    const randomIndex = Math.floor(Math.random() * (listOfNodes.length - 1)) + 1;

    await db.update(nodes)
        .set({ nodeOfDay: null })
        .where(eq(nodes.id, currentCorrectNode.id));

    await db.update(nodes)
        .set({ nodeOfDay: true })
        .where(eq(nodes.id, randomIndex));

    return res.json(listOfNodes[randomIndex]);
}