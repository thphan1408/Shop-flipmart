import useRouteElement from './routes'
import './locales/i18n'

function App() {
  const routes = useRouteElement()
  return <>{routes}</>
}

export default App
