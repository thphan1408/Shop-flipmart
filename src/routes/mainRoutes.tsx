import MainLayout from '../layout/MainLayout'
import { SignIn, NotFound, ServerInternalPage, Home } from '../pages'
import { PATHS } from '../utils/paths'

const mainRoutes = [
  {
    path: PATHS.ROOT.replace('/:lng', ''),
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
    path: '/:lng/*',
    errorElement: <ServerInternalPage />,
    element: <NotFound />,
  },
]
export default mainRoutes
