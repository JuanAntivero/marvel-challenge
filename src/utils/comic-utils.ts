import { ComicDate } from "../services/api/api-types";

export const getComicOnSaleDate = (dates: ComicDate[]) => {
  const onSaleDateString = dates.find(dateData => dateData.type === "onsaleDate")?.date;

  return onSaleDateString ? new Date(onSaleDateString).getFullYear() : undefined;
}