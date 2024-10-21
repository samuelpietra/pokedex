import { MoveRight } from 'lucide-react'

export function PokemonTimeline() {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt=""
        className="w-[50px] sm:w-[100px] md:w-[150px]"
      />

      <MoveRight className="h-6 w-6 text-pk-type-grass md:h-8 md:w-8" />

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
        alt=""
        className="w-[50px] grayscale filter sm:w-[100px] md:w-[120px]"
      />

      <MoveRight className="h-6 w-6 text-pk-type-grass md:h-8 md:w-8" />

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
        alt=""
        className="w-[50px] grayscale filter sm:w-[100px] md:w-[120px]"
      />
    </div>
  )
}
