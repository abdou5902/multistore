"use server";

import { cookies } from "next/headers";

export default async function logoutAction() {
    cookies().delete("new_token");
    cookies().delete("user_token");
    cookies().delete("user_info");
}