import "./HeaderStyles.css";
import { MarvelLogo } from "../../components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

interface HeaderProps {
  favoriteNumber: number;
  onClickLogo: () => void;
  onClickFavorites: () => void;
}

const Header = ({ onClickLogo, onClickFavorites, favoriteNumber }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-logo" onClick={onClickLogo}>
        <MarvelLogo />
      </div>
      <FavoriteButton favoriteNumber={favoriteNumber} onClick={onClickFavorites} />
    </div>
  );
}

export default Header;