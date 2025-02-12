import { useHeroesData } from "./useHeroesData";

export const useHome = () => {

  const { isLoading, data } = useHeroesData();

  return {
    heroesList: data?.results || [],
    isLoading
  }
}
