import { createBrowserRouter } from 'react-router'

import App from './containers/App'
import FilmsList from './containers/FilmsList'
import Film from './containers/Film'
import SearchFilms from './containers/SearchFilms'
import Home from './containers/Home'
import Favorites from './containers/Favorites'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        // path: "films",
        index: true,
        Component: Home,
      },
      {
        path: 'films',
        Component: FilmsList,
      },
      {
        path: 'search',
        Component: SearchFilms,
      },
      {
        path: 'film/:id',
        Component: Film,
      },
      {
        path: 'favorites',
        Component: Favorites,
      },
    ],
  },
])
