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
    <div className="hero-card" id={`hero-card_${id}`} onClick={handleOnClickPropagation(onClick)}>
      <img src={imgSrc} alt={heroName} />
      <div className="hero-card_name">
        <p>{heroName}</p>
        <div onClick={handleOnClickPropagation(onClickFavorite)}>
          {
            isFavorite ?
              <FavoriteIcon width={12} height={10} /> :
              <FavoriteTransparentIcon width={12} height={10} />
          }
        </div>
      </div>
    </div>
  );
};

export default HeroCard;