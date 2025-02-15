import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FavoritesState {
  showFavorites: boolean,
  favoritesIds: { [key: number]: boolean }
}

const initialState: FavoritesState = {
  showFavorites: false,
  favoritesIds: {}
};

export const favoritesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      state.favoritesIds[action.payload] = true;
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      delete state.favoritesIds[action.payload]
    },
    setShowFavorites: (state, action: PayloadAction<boolean>) => {
      state.showFavorites = action.payload
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite, setShowFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;