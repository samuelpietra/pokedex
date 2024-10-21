import { Outlet } from 'react-router-dom'

import { Content } from './content'
import { Header } from './header'

export function Layout() {
  return (
    <div className="bg-pk-primary flex min-h-screen flex-col">
      <Header />

      <Content>
        <Outlet />
      </Content>
    </div>
  )
}
