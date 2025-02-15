import { Thumbnail } from "./Thumbnail";

export type ComicDate = {
  type: "onsaleDate" | "focDate" | "unlimitedDate" | "digitalPurchaseDate",
  date: string,
}

export type Comic = {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  dates: ComicDate[];
}