import { Outlet } from "react-router-dom";
import { Header } from "../../features";

const RootLayout = () => {
  return (
    <div>
      <Header 
        onClickLogo={() => {}}
        onClickFavorites={() => {}}
        favoriteNumber={0}
      />
      <Outlet />
    </div>
  );
}

export default RootLayout;