import "./HomeStyles.css"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import HeroCard from "../../features/HeroCard/HeroCard";
import { useHome } from "./hooks/useHome";

const Home = () => {
  const {
    isLoading,
    heroesList,
  } = useHome();

  return (
    <>
      {
        isLoading ?
        <LoadingSpinner />
      :
        <div>
          <div className="heroes-list">
            {heroesList.map((hero) => (
              <HeroCard
                key={hero.id}
                id={hero.id}
                imgSrc={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                heroName={hero.name}
                isFavorite={true}
                onClick={() => {}}
                onClickFavorite={() => {}}
              />
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default Home;