import { ChevronLeft, ChevronRight } from 'lucide-react'

export function PokemonNavigator() {
  return (
    <div className="z-10 flex items-center justify-between px-[30px] sm:px-[130px] md:px-[200px] lg:px-[330px] xl:px-[430px]">
      <button>
        <ChevronLeft className="h-8 w-8 text-pk-gray-white" />
        <span className="sr-only">Previous Pokémon</span>
      </button>

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt=""
        className="z-10 w-[200px]"
      />

      <button>
        <ChevronRight className="h-8 w-8 text-pk-gray-white" />
        <span className="sr-only">Next Pokémon</span>
      </button>
    </div>
  )
}
