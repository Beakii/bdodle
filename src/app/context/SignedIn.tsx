'use client'
import { useSession } from "next-auth/react";
import React from "react";

export default function SignedIn({ children }: { children: React.ReactNode | (() => void) }) {
    const session = useSession();

    if (session.status === "authenticated") {
        return (
            <>
                {children}
            </>
        );
    }
    else {
        return null;
    }
}