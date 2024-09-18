'use server'

import { cookies } from "next/headers"

export default async function setNewToken(token) {
    return cookies().set("new_token", token);
}