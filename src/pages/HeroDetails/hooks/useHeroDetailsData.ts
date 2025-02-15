
import { useQuery } from "@tanstack/react-query";
import { fetchHero, fetchHeroComics } from "../../../services/api/api";

export const useHeroDetailsData = (id: string) => {
  const { isLoading, data } = useQuery({
    queryKey: ['heroDetails', id],
    queryFn: () => Promise.all([fetchHero(id), fetchHeroComics(id)]),
    staleTime: 1000*60*60*24,
  });
  const [heroDescription, comicsData] = data || [undefined, []];

  return {
    comicsData,
    heroDescription,
    isLoading
  }
}