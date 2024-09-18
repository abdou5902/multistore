'use server'

import { cookies } from "next/headers"

export default async function getNewToken() {
    return cookies().get("new_token")?.value;
}