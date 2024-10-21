import { HttpStatusCode } from 'axios'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'

import Pokeball from '../assets/Pokeball.svg'
import { Pokemon } from '../common/classes/Pokemon/Pokemon'
import {
  PokemonStatsBarChart,
  PokemonStatsRadarChart,
} from '../components/charts'
import { useLayoutState } from '../components/layout'
import { PokemonMeasures } from '../components/pokemon-measures'
import { PokemonNavigator } from '../components/pokemon-navigator'
import { PokemonSection } from '../components/pokemon-section'
import { PokemonTypesRow } from '../components/pokemon-types-row'
import { ErrorStateMessage } from '../components/state-messages/error-state-message'
import { NotFoundStateMessage } from '../components/state-messages/not-found-state-message'
import useHttpStateful from '../hooks/useHttpStateful'

export function PokemonPage() {
  const { setBackgroundColor } = useLayoutState()

  const { id = '' } = useParams<{ id: string }>()

  const { error, isLoading, payload, request } = useHttpStateful<Pokemon>(
    'get',
    'v1/pokemons/:id',
  )

  const getPokemon = () => {
    request({ urlParams: { id } })
  }

  const primaryType = payload?.types[0] || 'unknown'

  useLayoutEffect(() => {
    setBackgroundColor(`bg-pk-type-${primaryType}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload])

  useEffect(() => {
    getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center font-bold text-pk-gray-white">
        Loading...
      </div>
    )

  if (error)
    return (
      <div className="flex h-screen items-center justify-center">
        {error.status === HttpStatusCode.NotFound ? (
          <NotFoundStateMessage />
        ) : (
          <ErrorStateMessage onRetry={getPokemon} />
        )}
      </div>
    )

  if (!payload) return null

  return (
    <>
      <Helmet title="Pokémon" />

      <div className="relative flex min-h-screen flex-col overflow-hidden">
        <div className="flex flex-row items-center justify-between p-5 pb-6">
          <div className="flex flex-row gap-2">
            <button>
              <Link to="/">
                <ArrowLeft className="h-8 w-8 text-pk-gray-white" />
              </Link>

              <span className="sr-only">Back to Dashboard</span>
            </button>

            <h1 className="text-pk-head font-bold text-pk-gray-white">
              {payload.name.replace('-m', '♂').replace('-f', '♀')}
            </h1>
          </div>

          <p className="text-pk-sub-1 font-bold text-pk-gray-white">{`#${id}`}</p>
        </div>

        <PokemonNavigator />

        <img
          alt=""
          className="absolute left-1/2 top-2 w-[208px] text-pk-gray-white opacity-10"
          src={Pokeball}
        />

        <div className="absolute min-h-full w-full translate-y-56 rounded-lg bg-pk-gray-background pt-14" />

        <div className="z-10 pb-4">
          <PokemonTypesRow types={payload.types} />

          <PokemonSection title="About" />

          <PokemonMeasures
            height={payload.height}
            status={payload.status}
            weight={payload.weight}
          />

          <div className="flex flex-col justify-center px-[20px] sm:px-[45px] md:px-[90px]">
            <p className="text-pk-body3 py-6 text-center text-pk-gray-dark">
              {payload.description}
            </p>

            <PokemonSection title="Base Stats" />

            <div className="mb-6 grid grid-cols-1 justify-items-center gap-2 md:grid-cols-2">
              <PokemonStatsBarChart
                primaryType={primaryType}
                stats={payload.stats}
              />

              <PokemonStatsRadarChart
                primaryType={primaryType}
                stats={payload.stats}
              />
            </div>
          </div>

          {/* @TODO: Implement evolution chain
          <PokemonSection title="Evolution" />
          <PokemonTimeline /> */}
        </div>
      </div>
    </>
  )
}
