import { useQuery } from "@tanstack/react-query";
import { fetchHeroes } from "../../../services/api/api";

export const useHeroesData = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['heroes'],
    queryFn:() => fetchHeroes(),
    staleTime: 1000*60*60*24, // 24 hours. This would be better managed in the backend
  });

  return {
    data,
    isLoading
  }
}