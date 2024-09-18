'use server'

import { getApi } from "@/_oneEntry";
import { cookies } from "next/headers";

export default async function getSession() {
    const api = await getApi();
    const user_token = cookies().get('user_token')?.value;

    if (!user_token) return null;

    try {
        const user = await api.Users.setAccessToken(user_token).getUser();
        if (!user) return null;
        return user;

    } catch (error) {
        console.error(error);
        
    }
}
