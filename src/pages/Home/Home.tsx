import "./HomeStyles.css"
import { LoadingBar } from "../../components";
import { HeroCard } from "../../features";
import { useHome } from "./hooks/useHome";
import { Search } from "../../features";

const Home = () => {
  const {
    heroesList,
    isLoading,
    onClickHero,
    setSearchValue,
    resultsCount
  } = useHome();

  return (
    <>
        { isLoading && <LoadingBar /> }
        <div className="home_container">
          <Search resultsCount={resultsCount} onChange={setSearchValue} disabled={isLoading} />
          { !isLoading &&
              <ul className="home_heroes-list">
                {heroesList.map((hero) => (
                  <li key={hero.id}>
                    <HeroCard
                      id={hero.id}
                      imgSrc={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                      heroName={hero.name}
                      isFavorite={true}
                      onClick={() => onClickHero(hero.id)}
                      onClickFavorite={() => {}}
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