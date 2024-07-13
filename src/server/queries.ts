import "server-only"
import { db } from "./db";
import { User } from "../app/types";
import { leaderboard } from "./db/schema";

export async function getAllNodes() {
    const nodes = await db.query.nodes.findMany();
    return nodes;
}

export async function getLeaderboard() {
    const leaderboard = await db.query.leaderboard.findMany();
    return leaderboard;
}

export async function addLeaderboardRow(user: User) {
    const newScore = await db.insert(leaderboard).values({ profilePicture: user.profilePicture, discordUsername: user.discordUsername, score: user.score });
}