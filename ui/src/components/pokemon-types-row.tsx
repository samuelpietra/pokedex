import { Pokemon } from '../common/classes/Pokemon/Pokemon'
import { Badge } from './ui/badge'

interface PokemonTypesRowProps {
  types: Pokemon['types']
}

export function PokemonTypesRow({ types }: PokemonTypesRowProps) {
  return (
    <div className="mb-6 flex justify-center gap-4">
      {types.map((type) => (
        <Badge key={type} variant={type}>
          {type}
        </Badge>
      ))}
    </div>
  )
}
