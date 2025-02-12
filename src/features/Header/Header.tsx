import "./HeaderStyles.css";
import MarvelLogo from "../../components/MarvelLogo/MarvelLogo";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

type HeaderProps = {
  favoriteNumber: number;
  onClickLogo: () => void;
  onClickFavorites: () => void;
}

const Header = ({ onClickLogo, onClickFavorites, favoriteNumber }: HeaderProps) => {
  return (
    <div className="header">
      <div onClick={onClickLogo}>
        <MarvelLogo />
      </div>
      <FavoriteButton favoriteNumber={favoriteNumber} onClick={onClickFavorites} />
    </div>
  );
}

export default Header;