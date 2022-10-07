import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Episode, EpisodeStateOpts } from '../../types';
import {
     getEpisodeDetails
} from '../actions/episode.action';

const initialState: EpisodeStateOpts = {
    episode: {} as Episode,
    currentEpisodeTab: 1,
    loadError: false,
    loading: true,
}

const characterSlice = createSlice({
    name: 'EPISODE',
    initialState,
    reducers: {
        setCurrentEpisode(state, action: PayloadAction<number>) {
            state.currentEpisodeTab = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getEpisodeDetails.fulfilled, (state, action) => {
            state.episode = action.payload

            state.loading = false
        })
    }
});

export const { setCurrentEpisode  } = characterSlice.actions
export default characterSlice;