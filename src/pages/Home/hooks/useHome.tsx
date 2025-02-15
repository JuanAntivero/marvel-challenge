import { useEffect, useState } from "react";
import { useHeroesData } from "./useHeroesData";
import useDebounce from "../../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../../store/hooks/useFavorites";
import { Hero } from "../../../types/Hero";

export const useHome = () => {
  const navigate = useNavigate();
  const {
    favoritesIds,
    isFavorite,
    showFavorites,
    toogleFavoriteId
  } = useFavorites()
  const [searchValue, setSearchValue] = useState("");
  const [heroesList, setHeroesList] = useState<Hero[]>([]);
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const { isLoading, data } = useHeroesData(debouncedSearchValue);

  const onClickHero = (id: number) => {
    navigate(`/hero/${id}`);
  }

  useEffect(() => {
    if (showFavorites) {
      setHeroesList((data?.results || []).filter(hero => favoritesIds[hero.id]));
    }else{
      setHeroesList(data?.results || []);
    }
  }, [showFavorites, data, favoritesIds]);

  return {
    heroesList,
    isFavorite,
    isLoading,
    onClickHero,
    resultsCount: heroesList.length,
    setSearchValue,
    showFavorites,
    toogleFavoriteId
  }
}
