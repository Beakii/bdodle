"use server"
import { addLeaderboardRow } from "~/server/queries";
import { User } from "../types"

export const addScore = async (user: User) => {
    'use server'
    const newScore = await addLeaderboardRow(user);
    console.log(newScore);
}