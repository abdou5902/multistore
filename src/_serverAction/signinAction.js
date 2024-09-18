'use server'

import { getApi } from "@/_oneEntry"
import { cookies } from "next/headers";

export default async function signinAction(formData) {
    const api = await getApi();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email) {
        return { success: false, error: "Email is required" };
    }

    try {
        const data = {
            authData: [
                { marker: "email", value: email },
                { marker: "password", value: password },
            ],
        };

        // Authenticate the user
        const userAuth = await api.AuthProvider.auth('signup', data);

        // Set cookies with tokens and user info
        cookies().set('user_token', userAuth.accessToken, {
            maxAge: 60 * 60 * 24, // 1 day
        });

        cookies().set('new_token', userAuth.refreshToken, {
            maxAge: 60 * 60 * 24 * 3, // 3 days
        });

        cookies().set('user_info', userAuth.userIdentifier);

        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, error: 'Sign-in failed. Please try again.' };
    }
}
