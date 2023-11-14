import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from '../theme'

export interface ThemeState {
  selectedTheme: Theme
}

export const initialState: ThemeState = {
  selectedTheme: Theme.dark
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateThemeState: (state, action: PayloadAction<ThemeState>) => {
      return { ...state, ...action.payload }
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateThemeState } = themeSlice.actions

export default themeSlice.reducer
