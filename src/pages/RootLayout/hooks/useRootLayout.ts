import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../../store/hooks/useFavorites";

export const useRootLayout = () => {
  const { favoritesCount, setShowFavoritesValue } = useFavorites();
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const onClickLogo = () => {
    setShowFavoritesValue(false);
    goToHome();
  };

  const onClickFavorites = () => {
    setShowFavoritesValue(true);
    goToHome();
  };

  return {
    favoritesCount,
    onClickFavorites,
    onClickLogo,
  }
}