import { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

interface LayoutState {
  backgroundColor: string | null
  setBackgroundColor: (backgroundColor: string) => void
}

const INITIAL_VALUE: LayoutState = {
  backgroundColor: null,
  setBackgroundColor: () => null,
}

const LayoutContext = createContext<LayoutState>(INITIAL_VALUE)

export function useLayoutState() {
  return useContext(LayoutContext)
}

export function Layout() {
  const [backgroundColor, setBackgroundColor] = useState('bg-white')

  const context: LayoutState = {
    backgroundColor,
    setBackgroundColor,
  }

  return (
    <LayoutContext.Provider value={context}>
      <div className={`flex justify-center p-2 ${context.backgroundColor}`}>
        <div className="flex min-h-screen w-[400px] min-w-[400px] flex-col sm:w-[600px] md:w-[745px] lg:w-[1000px] xl:w-[1200px]">
          <Outlet />
        </div>
      </div>
    </LayoutContext.Provider>
  )
}
