import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/layout'
import { DashboardPage } from './pages/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <h1>Not Found</h1>,
    children: [{ path: '/', element: <DashboardPage /> }],
  },
])
