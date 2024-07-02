import "server-only"
import { db } from "./db";

export async function getAllNodes() {
    const nodes = await db.query.nodes.findMany();
    return nodes;
}