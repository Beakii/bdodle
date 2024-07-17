"use server"
import { addLeaderboardRow, getLeaderboard } from "~/server/queries";
import { User } from "../types"
import { usernameMap } from "../usernameMap";

export const addScore = async (user: User) => {
    'use server'
    usernameMap.forEach(creator => {
        if (user.discordUsername === creator.discordUsername) {
            user.discordUsername = creator.twitchUsername;
        }
    })

    const listOfUsers = await getLeaderboard();
    const userAlreadyOnLeaderboard = listOfUsers.find(userOnLeaderboard => userOnLeaderboard.discordUsername === user.discordUsername);

    if (!userAlreadyOnLeaderboard) {
        await addLeaderboardRow(user);
    }
}