"use server"
import { addLeaderboardRow } from "~/server/queries";
import { User } from "../types"
import { usernameMap } from "../usernameMap";

export const addScore = async (user: User) => {
    'use server'
    usernameMap.forEach(creator => {
        if (user.discordUsername === creator.discordUsername) {
            user.discordUsername = creator.twitchUsername;
        }
    })
    const newScore = await addLeaderboardRow(user);
    console.log(newScore);
}