import { AxiosResponse } from "axios";
import { Hero } from "../../types/Hero";
import { Comic } from "../../types/Comic";

export type ApiResponse<T> = {
	code: number;
	status: string;
	data: T;
};

export type MarvelData<T> = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}

export type HeroData = MarvelData<Hero>;
export type ComicData = MarvelData<Comic>;

export type HeroResponse = AxiosResponse<ApiResponse<HeroData>>;
export type ComicsResponse = AxiosResponse<ApiResponse<ComicData>>;