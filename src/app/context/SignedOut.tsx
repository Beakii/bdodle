'use client'
import { useSession } from "next-auth/react";

export default function SignedIn({ children }: { children: React.ReactNode }) {
    const session = useSession();

    if (session.status === "unauthenticated") {
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