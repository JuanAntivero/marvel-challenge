import { Outlet, useNavigate } from "react-router-dom";
import { Header, Footer } from "../../features";

const RootLayout = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  return (
    <div>
      <Header 
        onClickLogo={goToHome}
        onClickFavorites={() => {}}
        favoriteNumber={0}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;