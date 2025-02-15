import "./HomeStyles.css"
import { LoadingBar } from "../../components";
import { HeroCard } from "../../features";
import { useHome } from "./hooks/useHome";
import { Search } from "../../features";

const Home = () => {
  const {
    heroesList,
    isFavorite,
    isLoading,
    onClickHero,
    setSearchValue,
    showFavorites,
    resultsCount,
    toogleFavoriteId
  } = useHome();

  return (
    <>
        { isLoading && <LoadingBar /> }
        <div className="home_container">
          {<h2 className={showFavorites ? "visible" : ""}>FAVORITES</h2>}
          <Search resultsCount={resultsCount} onChange={setSearchValue} disabled={isLoading} />
          { !isLoading &&
              <ul className="home_heroes-list">
                {heroesList.map((hero) => (
                  <li key={hero.id}>
                    <HeroCard
                      id={hero.id}
                      imgSrc={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                      heroName={hero.name}
                      isFavorite={isFavorite(hero.id)}
                      onClick={() => onClickHero(hero.id)}
                      onClickFavorite={() => toogleFavoriteId(hero.id)}
                    />
                  </li>
                ))}
              </ul>
          }
        </div>
    </>
  )
}

export default Home;