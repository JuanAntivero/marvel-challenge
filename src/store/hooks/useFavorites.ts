import { selectFavoritesCount, selectFavoritesIds, selectShowFavorites } from "../slices/Favorites/favoritesSelectors"
import { addFavorite, removeFavorite, setShowFavorites} from "../slices/Favorites/favoritesSlice";
import { useStoreDispatch, useStoreSelector } from "./storeHooks";

export const useFavorites = () => {
  const dispatch = useStoreDispatch();

  const favoritesIds = useStoreSelector(selectFavoritesIds);
  const favoritesCount = useStoreSelector(selectFavoritesCount);
  const showFavorites = useStoreSelector(selectShowFavorites);

  const addFavoriteId = (id: number) => { dispatch(addFavorite(id)) };

  const removeFavoriteId = (id: number) => { dispatch(removeFavorite(id)) };

  const isFavorite = (id: number) => !!favoritesIds[id];

  const toogleFavoriteId = (id: number) => {
    isFavorite(id) ? removeFavoriteId(id) : addFavoriteId(id)
  };
  
  const setShowFavoritesValue = (show: boolean) => { dispatch(setShowFavorites(show)) };
  
  return {
    favoritesCount,
    favoritesIds,
    isFavorite,
    setShowFavoritesValue,
    showFavorites,
    toogleFavoriteId
  }
}