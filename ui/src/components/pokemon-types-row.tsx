import { Badge } from './ui/badge'

export function PokemonTypesRow() {
  return (
    <div className="mb-6 flex justify-center gap-4">
      <Badge variant="grass">Grass</Badge>
      <Badge variant="poison">Poison</Badge>
    </div>
  )
}
