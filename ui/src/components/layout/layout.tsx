import { ReactNode } from 'react'

import { Header } from './header'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return <div className="w-100 flex flex-col">{children}</div>
}

Layout.Header = Header
