import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/Favorites/favoritesSlice';


// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  favorites: favoritesReducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']