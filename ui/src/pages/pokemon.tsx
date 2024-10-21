import { ArrowLeft } from 'lucide-react'
import { useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import Pokeball from '../assets/Pokeball.svg'
import {
  PokemonStatsBarChart,
  PokemonStatsRadarChart,
} from '../components/charts'
import { useLayoutState } from '../components/layout'
import { PokemonMeasures } from '../components/pokemon-measures'
import { PokemonNavigator } from '../components/pokemon-navigator'
import { PokemonSection } from '../components/pokemon-section'
import { PokemonTimeline } from '../components/pokemon-timeline'
import { PokemonTypesRow } from '../components/pokemon-types-row'

export function PokemonPage() {
  const { setBackgroundColor } = useLayoutState()

  useLayoutEffect(() => {
    setBackgroundColor('bg-pk-type-grass')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              Bulbasaur
            </h1>
          </div>

          <p className="text-pk-sub-1 font-bold text-pk-gray-white">#999</p>
        </div>

        <PokemonNavigator />

        <img
          alt=""
          className="absolute left-1/2 top-2 w-[208px] text-pk-gray-white opacity-10"
          src={Pokeball}
        />

        <div className="absolute min-h-full w-full translate-y-56 rounded-lg bg-pk-gray-background pt-14" />

        <div className="z-10 pb-4">
          <PokemonTypesRow />

          <PokemonSection title="About" />
          <PokemonMeasures />

          <div className="flex flex-col justify-center px-[20px] sm:px-[45px] md:px-[90px]">
            <p className="text-pk-body3 py-6 text-center text-pk-gray-dark">
              There is a plant seed on its back right from the day this Pokémon
              is born. The seed slowly grows larger.
            </p>

            <PokemonSection title="Base Stats" />

            <div className="mb-6 grid grid-cols-1 justify-items-center gap-2 md:grid-cols-2">
              <PokemonStatsBarChart />
              <PokemonStatsRadarChart />
            </div>
          </div>

          <PokemonSection title="Evolution" />
          <PokemonTimeline />
        </div>
      </div>
    </>
  )
}
