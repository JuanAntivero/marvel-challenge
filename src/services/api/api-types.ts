import { AxiosResponse } from "axios";

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

type Thumbnail = {
  path: string;
  extension: string;
}

export type Hero = {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}

export type HeroData = MarvelData<Hero>;

export type HeroResponse = AxiosResponse<ApiResponse<HeroData>>;