import { useParams } from "react-router-dom";
import { useHeroDetailsData } from "./useHeroDetailsData";

export const useHeroDetails = () => {
  const { heroId } = useParams() as { heroId: string };
  const {
    comicsData,
    heroDescription,
    isLoading
  } = useHeroDetailsData(heroId);

  return {
    comics: comicsData,
    heroDescription,
    isLoading
  }
}
