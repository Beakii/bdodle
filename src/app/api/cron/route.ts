'use server'
import { db } from "~/server/db";
import { Node } from "~/app/types";
import { leaderboard, nodes } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { getAllNodes } from "~/server/queries";

export async function GET(req: NextRequest) {
    if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    //@ts-ignore
    const listOfNodes: Node[] = getAllNodes();
    const currentCorrectNode: Node = listOfNodes.find(node => node.nodeOfDay === true)!;

    const randomIndex = Math.floor(Math.random() * (listOfNodes.length - 1)) + 1;

    await db.update(nodes)
        .set({ nodeOfDay: null })
        .where(eq(nodes.id, currentCorrectNode.id));

    await db.update(nodes)
        .set({ nodeOfDay: true })
        .where(eq(nodes.id, randomIndex));

    await db.delete(leaderboard);

    return NextResponse.json(listOfNodes[randomIndex], { status: 200 });
}