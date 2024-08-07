import useRouteElement from './routes'
import './locales/i18n'
import { PageHelmet } from './utils/helmetPage'

function App() {
  const routes = useRouteElement()
  return (
    <>
      <PageHelmet />
      {routes}
    </>
  )
}

export default App
