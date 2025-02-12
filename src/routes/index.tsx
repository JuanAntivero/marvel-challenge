import { createBrowserRouter } from "react-router-dom";
import { Home, NotFoundPage, RootLayout, Error } from "../pages";


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
        path: "*",
        element: <NotFoundPage />,
      }
    ]
  },
]);