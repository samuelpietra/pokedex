import { Eye, Ruler, Weight } from 'lucide-react'

import ColoredPokeball from '../assets/ColoredPokeball.png'
import { Separator } from './ui/separator'

interface PokemonMeasuresProps {
  caught?: boolean
}

export function PokemonMeasures({ caught = true }: PokemonMeasuresProps) {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex w-28 flex-col items-center gap-2">
        <div className="flex flex-row items-center gap-2">
          <Weight className="h-4 w-4 text-pk-gray-dark" />
          <p className="text-pk-body-2 text-pk-gray-dark">
            {(15).toFixed(2)} lb
          </p>
        </div>

        <p className="text-pk-body-3 text-pk-gray-medium">Weight</p>
      </div>

      <Separator orientation="vertical" className="mx-1 h-10" />

      <div className="flex w-28 flex-col items-center gap-2">
        <div className="flex flex-row items-center gap-2">
          <Ruler className="h-4 w-4 text-pk-gray-dark" />
          <p className="text-pk-body-2 text-pk-gray-dark">
            {(2.3).toFixed(2)} ft
          </p>
        </div>

        <p className="text-pk-body-3 text-pk-gray-medium">Height</p>
      </div>

      <Separator orientation="vertical" className="mx-1 h-10" />

      <div className="flex w-28 flex-col items-center gap-2">
        <div className="flex flex-row items-center gap-2">
          {caught ? (
            <img src={ColoredPokeball} alt="" className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4 text-pk-gray-dark" />
          )}
          <p className="text-pk-body-2 text-pk-gray-dark">
            {caught ? 'Caught' : 'Seen'}
          </p>
        </div>

        <p className="text-pk-body-3 text-pk-gray-medium">Status</p>
      </div>
    </div>
  )
}
