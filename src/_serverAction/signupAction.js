'use server'

import { getApi } from "@/_oneEntry"

export default async function signupAction(formData) {
    const api = await getApi();

    const name = formData.get('name');
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const data = {
            formIdentifier: "signupForm",
            authData: [
                {marker: "name",        value: name},
                {marker: "email",       value: email},
                {marker: "password",    value: password},
            ],
            formData: [
                {marker: "name",        value: name,        type: "string"},
                {marker: "email",       value: email,       type: "string"},
                {marker: "password",    value: password,    type: "string"},
            ]
        }
    
        const sendFormData = await api.AuthProvider.signUp('signup', data)
        return { success: true };

    } catch (error) {
        console.log(error);
        return { success: false, error: 'Sign-up failed. Please try again.' };
    }
}