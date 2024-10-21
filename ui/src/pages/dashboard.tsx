import { Helmet } from 'react-helmet-async'

import { PokemonCard } from '../components/pokemon-card'

export function DashboardPage() {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex justify-center">
        <ol className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {Array.from({ length: 150 }).map((_, index) => (
            <li key={index}>
              <PokemonCard />
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
