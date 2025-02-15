import "./HeroDescriptionStyles.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

type HeroDescriptionProps = {
  text: string;
  imgSrc: string;
  isFavorite: boolean;
  onClickFavorite: () => void;
  title: string;
}

const HeroDescription = ({ imgSrc, title, text, isFavorite, onClickFavorite}: HeroDescriptionProps) => (
  <section className="hero-description">
    <img src={imgSrc} alt={title} />
    <div className="hero-description_container">
      <div className="hero-description_title">
        <h1>{title}</h1>
        <FavoriteButton onClick={onClickFavorite} />
      </div>
      <p>{text}</p>
    </div>
  </section>
);

export default HeroDescription;