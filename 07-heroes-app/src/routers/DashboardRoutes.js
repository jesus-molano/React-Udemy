import { Redirect, Route, Switch } from 'react-router'
import { Navbar } from '../components/ui/Navbar'
import DCPage from '../pages/DCPage'
import HeroPage from '../pages/HeroesPage'
import MarvelPage from '../pages/MarvelPage'
import SearchPage from '../pages/SearchPage'

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path='/marvel' component={MarvelPage} />
					<Route exact path='/dc' component={DCPage} />
          <Route exact path='/hero/:heroId' component={HeroPage} />
          <Route exact path='/search' component={SearchPage} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}

export default DashboardRoutes
