import "./FavoriteButtonStyles.css";
import { FavoriteIcon, FavoriteTransparentIcon } from "../../components";

interface FavoriteButtonProps {
  favoriteNumber?: number;
  onClick: () => void;
};

const FavoriteButton = ({ onClick, favoriteNumber }: FavoriteButtonProps ) => {
  const hasSomeFavorite = !!favoriteNumber;
  return (
    <button className="favorite-button" onClick={onClick}>
      {
        hasSomeFavorite ?
          <FavoriteIcon /> :
          <FavoriteTransparentIcon />
      }
      <span className="favorite-button_text">{favoriteNumber}</span>
    </button>
  );
}

export default FavoriteButton;