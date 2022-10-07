import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import {
	getSingleCharacter,
	getCharacters,
} from '../actions/character.action';
import { Character, CharacterStateOpts } from '../../types';

const initialState: CharacterStateOpts = {
	characters: [],
	character: {} as Character,
	loadError: false,
	loading: true,
	resultsInfo: {}
}

const characterSlice = createSlice({
	name: 'CHARACTER',
	initialState,
	reducers: {
		setCharacter(state, action: PayloadAction<Character>) {
			state.character = action.payload
		}
	},
	extraReducers: (builder) =>  {
		builder.addCase(getCharacters.fulfilled, (state, action) => {
			if (!action.payload) {
				state.loadError = true

				return
			}
		
			state.characters = action.payload.results
			state.resultsInfo = action.payload.info
			state.loading = false
		})
		
		builder.addCase(getSingleCharacter.fulfilled, (state, action) => {
			if (!action.payload) {
				state.loadError = true

				return
			}

			state.character = action.payload
			state.loading = false
		})
	}
});

export const { setCharacter } = characterSlice.actions
export const characterReducer = characterSlice.reducer
export default characterSlice;
