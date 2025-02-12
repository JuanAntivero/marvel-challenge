import "./HeroCardStyles.css";
import { FavoriteIcon, FavoriteTransparentIcon } from "../../components";
import { handleOnClickPropagation } from "../../utils/click-utils";

interface HeroCardProps {
  id: number;
  heroName: string;
  imgSrc: string;
  isFavorite: boolean;
  onClick: () => void;
  onClickFavorite: () => void;
}

const HeroCard = ({ 
  id,
  heroName,
  imgSrc,
  isFavorite,
  onClick,
  onClickFavorite
}: HeroCardProps) => {

  return (
    <div className="hero-card" id={`hero-card_${id}`}>
      <img src={imgSrc} alt={heroName} />
      <button onClick={handleOnClickPropagation(onClick)}>
        <p>{heroName}</p>
        <div onClick={handleOnClickPropagation(onClickFavorite)}>
          {
            isFavorite ?
              <FavoriteIcon width={12} height={10} /> :
              <FavoriteTransparentIcon width={12} height={10} />
          }
        </div>
      </button>
    </div>
  );
};

export default HeroCard;