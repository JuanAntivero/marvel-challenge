import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../features";
import { useRootLayout } from "./hooks/useRootLayout";

const RootLayout = () => {
  const {
    favoritesCount,
    onClickFavorites,
    onClickLogo,
  } = useRootLayout();
  
  return (
    <div>
      <Header 
        onClickLogo={onClickLogo}
        onClickFavorites={onClickFavorites}
        favoriteNumber={favoritesCount}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;