import { RouteObject, useRoutes } from 'react-router-dom'

const useRouteElement = () => {
  const routes: RouteObject[] = [
    {
      path: '*',
      element: '404 Not Found',
    },
  ]

  return useRoutes(routes)
}

export default useRouteElement
