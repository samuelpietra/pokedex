import { Outlet } from 'react-router-dom'

import { Content } from './content'
import { Header } from './header'

export function Layout() {
  return (
    <div className="flex justify-center bg-pk-primary">
      <div className="flex min-h-screen max-w-[1280px] flex-col ">
        <Header />

        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  )
}
