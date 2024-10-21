import { ArrowLeft } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import Pokeball from '../assets/Pokeball.svg'
import { PokemonMeasures } from '../components/pokemon-measures'
import { PokemonNavigator } from '../components/pokemon-navigator'
import { PokemonTypesRow } from '../components/pokemon-types-row'

export function PokemonPage() {
  return (
    <>
      <Helmet title="Pokémon" />

      <div className="relative flex min-h-screen flex-col overflow-hidden bg-pk-type-grass">
        <div className="flex flex-row items-center justify-between p-5 pb-6">
          <div className="flex flex-row gap-2">
            <button>
              <Link to="/">
                <ArrowLeft className="h-8 w-8 text-pk-gray-white" />
              </Link>

              <span className="sr-only">Back to Dashboard</span>
            </button>

            <h1 className="z-10 text-pk-head font-bold text-pk-gray-white">
              Bulbasaur
            </h1>
          </div>

          <p className="text-pk-sub-2 font-bold text-pk-gray-white">#999</p>
        </div>

        <PokemonNavigator />

        <img
          alt=""
          className="absolute left-1/2 top-2 w-[208px] text-pk-gray-white opacity-10"
          src={Pokeball}
        />

        <div
          className="absolute left-2 min-h-full translate-y-56 rounded-lg bg-pk-gray-background pt-14"
          style={{ minWidth: 'calc(100vw - 16px)' }}
        >
          <PokemonTypesRow />

          <div className="mb-4 flex justify-center">
            <p className="text-pk-sub-1 font-bold text-pk-type-grass">About</p>
          </div>

          <PokemonMeasures />

          <p className="text-pk-body3 p-6 text-center text-pk-gray-dark">
            There is a plant seed on its back right from the day this Pokémon is
            born. The seed slowly grows larger.
          </p>
        </div>
      </div>
    </>
  )
}
