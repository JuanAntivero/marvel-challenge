import { createBrowserRouter } from "react-router-dom";
import { Home, HeroDetails, NotFound, RootLayout, Error } from "../pages";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/hero/:heroId",
        element: <HeroDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ]
  },
]);