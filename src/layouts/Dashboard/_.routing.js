// Pages
import MainPageBeers from 'pages/Beers/Main'
import BeerDetail from 'pages/Beer/BeerDetail'

const routes = [
  {
    path: '/',
    component: MainPageBeers,
    exact: true,
  },
  {
    path: '/beers', 
    component: MainPageBeers,
    exact: true,
  },
  {
    path: '/beers/detail/:id',
    component: BeerDetail,
    exact: true,
  }
]

export default routes
