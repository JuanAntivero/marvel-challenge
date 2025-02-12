import { useState } from "react";
import { useHeroesData } from "./useHeroesData";
import useDebounce from "../../../hooks/useDebounce";

export const useHome = () => {

  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const { isLoading, data } = useHeroesData(debouncedSearchValue);

  return {
    heroesList: data?.results || [],
    isLoading,
    resultsCount: data?.results.length,
    setSearchValue
  }
}
