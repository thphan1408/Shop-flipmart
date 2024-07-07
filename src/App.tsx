import useRouteElement from './routes/useRouteElement'

function App() {
  const routes = useRouteElement()
  return <>{routes}</>
}

export default App
