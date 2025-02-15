import "./ComicCardStyles.css";

type ComicCardProps = {
  id: string;
  title: string;
  year?: number;
  imgSrc: string;
}

const ComicCard = ({ id, title, year, imgSrc }: ComicCardProps) => {
  return (
    <div className="comic-card" id={`comic-card-${id}`}>
      <img src={imgSrc} alt={title} />
      <div className="comic-card_title">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default ComicCard;