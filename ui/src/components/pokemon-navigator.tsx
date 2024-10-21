import { ChevronLeft, ChevronRight } from 'lucide-react'

export function PokemonNavigator() {
  return (
    <div className="flex items-center justify-between px-5">
      <ChevronLeft className="h-8 w-8 text-pk-gray-white" />

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt=""
        className="z-10 w-[200px]"
      />

      <ChevronRight className="h-8 w-8 text-pk-gray-white" />
    </div>
  )
}
