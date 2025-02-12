import "./HomeStyles.css"
import { LoadingSpinner } from "../../components";
import { HeroCard } from "../../features";
import { useHome } from "./hooks/useHome";
import { Search } from "../../features";

const Home = () => {
  const {
    heroesList,
    isLoading,
    setSearchValue,
    resultsCount
  } = useHome();

  return (
    <>
        <div className="home_container">
          <Search resultsCount={resultsCount} onChange={setSearchValue} disabled={isLoading} />
          {isLoading ?
            <LoadingSpinner />
          :
          <div className="home_heroes-list">
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
          }
        </div>
    </>
  )
}

export default Home;