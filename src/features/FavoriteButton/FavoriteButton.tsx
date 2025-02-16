import "./FavoriteButtonStyles.css";
import { FavoriteIcon, FavoriteTransparentIcon } from "../../components";

interface FavoriteButtonProps {
  favoriteNumber?: number;
  isFavorite: boolean;
  onClick: () => void;
}

const FavoriteButton = ({ onClick, favoriteNumber, isFavorite }: FavoriteButtonProps ) => {
  return (
    <button className="favorite-button" onClick={onClick}>
      {
        isFavorite ?
          <FavoriteIcon /> :
          <FavoriteTransparentIcon />
      }
      {favoriteNumber !== undefined && <span className="favorite-button_text">{favoriteNumber}</span>}
    </button>
  );
}

export default FavoriteButton;