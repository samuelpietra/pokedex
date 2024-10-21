import { useEffect, useLayoutEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Pokemon } from '../common/classes/Pokemon/Pokemon'
import { useLayoutState } from '../components/layout'
import { PageHeader } from '../components/page-header'
import { PokemonCard } from '../components/pokemon-card'
import { Button } from '../components/ui/button'
import useHttpStateful from '../hooks/useHttpStateful'

const REQUEST_LIMIT = 50

export function DashboardPage() {
  const { setBackgroundColor } = useLayoutState()

  const [items, setItems] = useState<Pokemon[]>([])
  const [offset, setOffset] = useState(0)

  const { error, isLoading, payload, request } = useHttpStateful<Pokemon[]>(
    'get',
    'v1/pokemons',
  )

  const getFirstItems = async () => {
    const { payload } = await request({
      params: { offset: 0, limit: REQUEST_LIMIT },
    })

    if (payload) {
      setItems(payload)
      setOffset(REQUEST_LIMIT)
    }
  }

  const getMoreItems = async () => {
    const { payload } = await request({
      params: { offset, limit: REQUEST_LIMIT },
    })

    if (payload) {
      setItems([...items, ...payload])
      setOffset((prev) => prev + REQUEST_LIMIT)
    }
  }

  useLayoutEffect(() => {
    setBackgroundColor('bg-pk-primary')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getFirstItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Helmet title="Dashboard" />
      <PageHeader title="Dashboard" />

      <div className="flex flex-col rounded-lg bg-pk-gray-white p-6">
        <ol className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {items.map((pokemon) => (
            <li key={pokemon.id}>
              <PokemonCard allSeen {...pokemon} />
            </li>
          ))}
        </ol>

        <Button
          className="mt-4 w-full max-w-[250px] self-center"
          disabled={isLoading}
          onClick={getMoreItems}
          variant="outline"
        >
          {isLoading ? 'Loading...' : 'Load more'}
        </Button>
      </div>
    </>
  )
}
