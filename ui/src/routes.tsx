import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/layout'
import { DashboardPage } from './pages/dashboard'
import { PokemonPage } from './pages/pokemon'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <h1>Not Found</h1>,
    children: [{ path: '/', element: <DashboardPage /> }],
  },
  {
    path: '/pokemons/:id',
    element: <PokemonPage />,
    errorElement: <h1>Not Found</h1>,
  },
])
