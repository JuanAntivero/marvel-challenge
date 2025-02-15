import { RootState } from "../../store"

export const selectFavorites = (state:RootState) =>
  state.favorites;

export const selectShowFavorites = (state:RootState) =>
  selectFavorites(state).showFavorites;

export const selectFavoritesIds = (state:RootState) =>
  selectFavorites(state).favoritesIds;

export const selectFavoritesCount = (state:RootState) =>
  Object.keys(selectFavorites(state).favoritesIds).length;