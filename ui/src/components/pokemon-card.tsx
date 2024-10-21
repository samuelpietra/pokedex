import { useNavigate } from 'react-router-dom'

import ColoredPokeball from '../assets/ColoredPokeball.png'
import { Pokemon } from '../common/classes/Pokemon/Pokemon'
import { PokemonStatus } from '../common/types/pokemon'
import { Card } from './ui/card'

interface PokemonCardProps extends Pokemon {
  allSeen?: boolean
}

export function PokemonCard({
  allSeen = false,
  id,
  name,
  sprite,
  status,
}: PokemonCardProps) {
  const navigate = useNavigate()

  const hasCaptured = status === PokemonStatus.Captured
  const hasSeen = status === PokemonStatus.Seen

  return (
    <button
      // className={`${!encountered && 'pointer-events-none'}`}
      onClick={() => navigate(`/pokemons/${id}`)}
    >
      <Card
        className={`relative h-[108px] w-[104px] overflow-hidden bg-pk-gray-white ${(allSeen || hasSeen) && 'hover:border-pk-primary hover:bg-red-100'}`}
      >
        <div
          className={`flex  px-2 pt-1 ${hasCaptured ? 'items-center justify-between' : 'justify-end'}`}
        >
          {hasCaptured && (
            <img src={ColoredPokeball} alt="" className="h-3 w-3" />
          )}
          <p className="text-pk-body-3 text-pk-gray-medium">{`#${id}`}</p>
        </div>

        <div className="flex w-full flex-col items-center">
          <img
            src={sprite}
            alt=""
            className={`z-10  ${!(allSeen || hasSeen) && 'contrast-0 filter'}`}
            width={68}
          />

          <p className="z-10 text-pk-body-3 text-pk-gray-dark">{name}</p>
        </div>

        <div className="absolute min-h-full min-w-full -translate-y-10 rounded-lg bg-pk-gray-background" />
      </Card>
    </button>
  )
}
