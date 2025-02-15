import "./HeroDetailsStyles.css";
import { LoadingBar } from "../../components";
import { ComicCard, HeroDescription } from "../../features";
import { getComicOnSaleDate } from "../../utils/comic-utils";
import { useHeroDetails } from "./hooks/useHeroDetails";

const HeroDetails = () => {
  const { 
    isLoading,
    heroDescription,
    comics
  } = useHeroDetails();

  return (
    <>
      {
        isLoading ?
        <LoadingBar />
      :
        (
          heroDescription &&
          <>
            <HeroDescription
              imgSrc={`${heroDescription.thumbnail.path}.${heroDescription.thumbnail.extension}`}
              title={heroDescription.name}
              text={heroDescription.description}
              isFavorite={true}
              onClickFavorite={() => {}}
            />
            {
              !!comics.length &&
              <div className="comics">
                <h2>COMICS</h2>
                <ul className="comics_list">
                  {comics.map((comic) => (
                    <li key={`comic-${comic.id}`}>
                      <ComicCard
                        id={`comic-${comic.id}`}
                        title={comic.title}
                        year={getComicOnSaleDate(comic.dates)}
                        imgSrc={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            }
          </>
        )
      }
    </>
  )
}

export default HeroDetails;