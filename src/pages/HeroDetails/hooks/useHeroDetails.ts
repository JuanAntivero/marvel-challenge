import { useParams } from "react-router-dom";
import { useHeroDetailsData } from "./useHeroDetailsData";
import { useFavorites } from "../../../store/hooks/useFavorites";


export const useHeroDetails = () => {
  const { heroId } = useParams() as { heroId: string };
  const { isFavorite, toogleFavoriteId } = useFavorites();
  const {
    comicsData,
    heroDescription,
    isLoading
  } = useHeroDetailsData(heroId);

  return {
    comics: comicsData,
    heroDescription,
    isFavorite,
    isLoading,
    toogleFavoriteId
  }
}
