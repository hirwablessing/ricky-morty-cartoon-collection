import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import characterSlice from "./slices/character.slice";
import episodeSlice from "./slices/episode.slice";

const reducer = combineReducers({
  characters: characterSlice.reducer,
  episodes: episodeSlice.reducer,
});

const setupStore: any = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer,
    preloadedState,
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducer>;

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default setupStore;
