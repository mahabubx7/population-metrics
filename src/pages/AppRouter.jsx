import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Country from "./Country";
import RootPage from "./Root";
import ErrorPage from "./Error";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/country/:countryCode",
          element: <Country />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
