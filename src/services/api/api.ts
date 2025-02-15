import axios, { AxiosResponse } from "axios";
import { ApiResponse, HeroResponse, HeroData, ComicsResponse, ComicData } from "./api-types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const MARVEL_API_KEY = import.meta.env.VITE_MARVEL_API_KEY;

const getParsedResponse = <T>(response: AxiosResponse<ApiResponse<T>>): T => {
  const { data } = response as AxiosResponse<ApiResponse<T>>;
  const result = data.data;
  return result;
}

export const fetchHeroes = async (searchValue: string) => {
  try {
    const searchQueryParam = searchValue ? `&nameStartsWith=${searchValue}` : "" 
    const result = await axios.get<null, HeroResponse>(`${BASE_URL}/characters?limit=50&apikey=${MARVEL_API_KEY}${searchQueryParam}`);
    return getParsedResponse<HeroData>(result);
  } catch (error) {
    throw new Error("Error while fetching heroes");
  }
};

export const fetchHero = async (id: string) => {
  const result = await axios.get<null, HeroResponse>(`${BASE_URL}/characters/${id}?apikey=${MARVEL_API_KEY}`);
  const parsedResponse = getParsedResponse<HeroData>(result);

  if (!parsedResponse.results.length) {
    throw new Error("Unexisting hero");
  }

  return parsedResponse.results[0];
}

export const fetchHeroComics = async (id: string) => {
  const result = await axios.get<null, ComicsResponse>(`${BASE_URL}/characters/${id}/comics?limit=20&apikey=${MARVEL_API_KEY}`);
  const parsedResponse = getParsedResponse<ComicData>(result);

  return parsedResponse.results;
}