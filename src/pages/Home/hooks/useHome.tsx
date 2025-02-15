import { useState } from "react";
import { useHeroesData } from "./useHeroesData";
import useDebounce from "../../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

export const useHome = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const { isLoading, data } = useHeroesData(debouncedSearchValue);

  const onClickHero = (id: number) => {
    navigate(`/hero/${id}`);
  }

  return {
    heroesList: data?.results || [],
    isLoading,
    onClickHero,
    resultsCount: data?.results.length,
    setSearchValue
  }
}
