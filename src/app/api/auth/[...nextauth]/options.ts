import type { NextAuthOptions } from "next-auth";
// import TwitchProvider from 'next-auth/providers/twitch';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: NextAuthOptions = {
    providers: [
        // TwitchProvider({
        //     clientId: process.env.TWITCH_ID!,
        //     clientSecret: process.env.TWITCH_SECRET!,
        //     authorization: {
        //         params: {
        //             scope: 'openid user:read:email'
        //         }
        //     },
        // }),
        DiscordProvider({
            clientId: process.env.DISCORD_ID!,
            clientSecret: process.env.DISCORD_SECRET!,
            authorization: {
                params: {
                    scope: 'identify'
                }
            },
        }),
    ],
}