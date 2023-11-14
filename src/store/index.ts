import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import userReducer from './user'
import themeReducer from './theme'
import { APP_CONFIG } from '../config'

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: APP_CONFIG.VITE_NODE_ENV?.toLowerCase() !== 'production'
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
