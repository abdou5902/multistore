import { defineOneEntry } from 'oneentry';
import getNewToken from '@/_serverAction/getNewToken';
import setNewToken from '@/_serverAction/setNewToken';

let api = null;

async function initApi() {
	if (!api) {
		let newToken = await getNewToken();

		api = defineOneEntry(process.env.API_URL, {
			token: process.env.API_TOKEN,
			langCode: 'en_US',
			auth: {
				customAuth: true,
				refreshToken: newToken,
				saveFunction: async (token) => {
					await setNewToken(token);
				},
			},
		});
	}

	return api;
}

export async function getApi() {
	if (!api) {
		await initApi();
	}

	return api;
}