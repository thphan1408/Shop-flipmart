import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/notFound";
import ServerInternalPage from "../pages/serverInternalPage";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    errorElement: <ServerInternalPage />,
    element: <NotFound />,
  },
];
export default mainRoutes;
