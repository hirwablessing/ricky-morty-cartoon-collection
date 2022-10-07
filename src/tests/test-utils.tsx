import React, { PropsWithChildren } from 'react'
import { render as rtlRender } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// import AppStore from '../state/'
import type { AppStore, RootState } from '../state/'
// As a basic setup, import your same slice reducers
// import { userReducer } from '../features/user/usersSlice'
// import { characterReducer } from '../state/slices/character.slice'
import setupStore from '../state/'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProvider(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) }
}

// re-export everything from RTL
export * from '@testing-library/react'