import { createAsyncThunk } from "@reduxjs/toolkit";
import { restEndpoint } from "./apiService";

interface GetCharacterOpts {
	episodeId?: number
}

export const getEpisodeDetails = createAsyncThunk(
	'episodes/getEpisodeDetails',
	async ({ episodeId = 1 }: GetCharacterOpts) => {
		if (!episodeId) return

		try {
			const req = await fetch(`${restEndpoint()}/episode/${episodeId}`)

			if (req.status === 200) {
				const data = await req.json()
				
				return data
			}
		} catch (error) {
			console.log(error);
		}
	}
);
