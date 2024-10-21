import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/layout'
import { DashboardPage } from './pages/dashboard'
import { NotFoundPage } from './pages/not-found'
import { PokemonPage } from './pages/pokemon'
import { TrainerCollectionPage } from './pages/trainer-collection'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: '/pokemons/:id', element: <PokemonPage /> },
      { path: '/collection', element: <TrainerCollectionPage /> },
    ],
  },
])
