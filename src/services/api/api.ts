import axios, { AxiosResponse } from "axios";
import { ApiResponse, HeroResponse, HeroData } from "./api-types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const MARVEL_API_KEY = import.meta.env.VITE_MARVEL_API_KEY;

const getParsedResponse = <T>(response: AxiosResponse<ApiResponse<T>>): T => {
  const { data } = response as AxiosResponse<ApiResponse<T>>;
  const result = data.data;
  return result;
}

export const fetchHeroes = async () => {
  try {
    const result = await axios.get<null, HeroResponse>(`${BASE_URL}/characters?limit=50&apikey=${MARVEL_API_KEY}`);
    return getParsedResponse<HeroData>(result);
  } catch (error) {
    throw new Error("Error while fetching heroes");
  }
}