import { useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import { useLayoutState } from '../components/layout'
import { PageHeader } from '../components/page-header'
import { PokemonCard } from '../components/pokemon-card'

export function DashboardPage() {
  const { setBackgroundColor } = useLayoutState()

  useLayoutEffect(() => {
    setBackgroundColor('bg-pk-primary')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Helmet title="Dashboard" />
      <PageHeader title="Dashboard" />

      <div className="rounded-lg bg-pk-gray-white p-6">
        <ol className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          <li>
            <PokemonCard encountered caught />
          </li>

          {Array.from({ length: 149 }).map((_, index) => (
            <li key={index}>
              <PokemonCard encountered />
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
