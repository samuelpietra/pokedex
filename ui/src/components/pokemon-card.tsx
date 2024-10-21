import ColoredPokeball from '../assets/ColoredPokeball.png'
import { Card } from './ui/card'

interface PokemonCardProps {
  caught?: boolean
  encountered?: boolean
}

export function PokemonCard({
  caught = false,
  encountered = false,
}: PokemonCardProps) {
  return (
    <Card className="bg-pk-gray-white relative h-[108px] w-[104px] overflow-hidden">
      <div
        className={`flex  px-2 pt-1 ${caught ? 'items-center justify-between' : 'justify-end'}`}
      >
        {caught && <img src={ColoredPokeball} alt="" className="h-3 w-3" />}
        <p className="text-pk-body-3 text-pk-gray-medium">#999</p>
      </div>

      <div className="flex w-full flex-col items-center">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt=""
          className={`z-10  ${!encountered && 'contrast-0 filter'}`}
          width={68}
        />

        <p className="text-pk-body-3 text-pk-gray-dark z-10">Pokémon Name</p>
      </div>

      <div className="bg-pk-gray-background absolute min-h-full min-w-full -translate-y-10 rounded-lg" />
    </Card>
  )
}
