"use client";

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        try {
            // Sign in to Firebase with GitHub authentication
            await gitHubSignIn();
        }
        catch (err) {
            console.error(err); alert("GitHub Sign-in failed. Please try again.");
        }
    };

    const handleLogout = async () => {
        try {
            // Sign out of Firebase
            await firebaseSignOut();
        }
        catch (err) {
            console.error(err); alert("Sign-out failed. Please try again.");
        }
    };

    return (
        <main className="flex flex-col items-center p-6">
            {!user && (
                <>
                    <h1 className="text-7xl font-bold text-purple-400 text-center dark:text-purple-500 mb-5">Shopping List</h1>
                    <p className="text-2xl text-purple-400 text-center dark:text-purple-500 mb-6">Please sign in with GitHub to continue.</p>
                    <button onClick={handleLogin} className="px-4 py-2 text-2xl rounded bg-purple-400 text-white dark:bg-purple-500">Sign in with GitHub</button>
                </>
            )}

            {user && (
                <>
                    <h1 className="text-7xl font-bold text-purple-400 text-center dark:text-purple-500 mb-3">Welcome, {user.displayName || "User"}!</h1>
                    <p className="text-3xl text-purple-400 text-center dark:text-purple-500 mb-8">{user.email}</p>

                    <div className="flex items-center gap-4">
                        <Link href="/week-9/shopping-list" className="text-2xl text-purple-400 dark:text-purple-500 underline underline-offset-2">Go to Shopping List</Link>
                        <button onClick={handleLogout} className="px-3 py-1.5 text-2xl rounded bg-purple-400 text-white dark:bg-purple-500">Log out</button>
                    </div>
                </>
            )}
        </main>
    );
} 