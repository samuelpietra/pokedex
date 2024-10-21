import { Ruler, Weight } from 'lucide-react'

import { Pokemon } from '../common/classes/Pokemon/Pokemon'
import { PokemonStatus } from '../common/types/pokemon'
import { SwapStatusButton } from './swap-status-button'
import { Separator } from './ui/separator'

type PokemonMeasuresProps = Pick<Pokemon, 'height' | 'id' | 'status' | 'weight'>

export function PokemonMeasures({
  height,
  id,
  getPokemon,
  status = PokemonStatus.Seen,
  weight,
}: PokemonMeasuresProps & { getPokemon: () => void }) {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex w-28 flex-col items-center gap-2">
        <div className="flex flex-row items-center gap-2">
          <Weight className="h-4 w-4 text-pk-gray-dark" />
          <p className="text-pk-body-2 text-pk-gray-dark">{weight} lb</p>
        </div>

        <p className="text-pk-body-3 text-pk-gray-medium">Weight</p>
      </div>

      <Separator orientation="vertical" className="mx-1 h-10" />

      <div className="flex w-28 flex-col items-center gap-2">
        <div className="flex flex-row items-center gap-2">
          <Ruler className="h-4 w-4 text-pk-gray-dark" />
          <p className="text-pk-body-2 text-pk-gray-dark">{height} ft</p>
        </div>

        <p className="text-pk-body-3 text-pk-gray-medium">Height</p>
      </div>

      <Separator orientation="vertical" className="mx-1 h-10" />

      <div className="flex w-28 flex-col items-center">
        <SwapStatusButton id={id} onUpdateStatus={getPokemon} status={status} />
      </div>
    </div>
  )
}
