import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  userName?: string
}

export const initialState: UserState = {
  userName: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload }
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateUserState } = userSlice.actions

export default userSlice.reducer
