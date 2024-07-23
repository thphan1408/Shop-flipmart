import MainLayout from '../layout/MainLayout'
import { SignIn, NotFound, ServerInternalPage, Home } from '../pages'
import { PATHS } from '../utils/paths'

const mainRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: PATHS.SIGNIN,
        element: <SignIn />,
      },
    ],
  },
  {
    path: '*',
    errorElement: <ServerInternalPage />,
    element: <NotFound />,
  },
]
export default mainRoutes
