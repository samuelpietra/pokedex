import { PokemonStatName, PokemonTypeName } from '../../types/pokemon'
import { Pokemon } from './Pokemon'

export abstract class AbstractPokemon {
  description: string
  height: number
  id: number
  name: string
  order: number
  sprite: string
  stats: Array<{ name: PokemonStatName; points: number }>
  types: PokemonTypeName[]
  weight: number

  constructor(pokemon: Pokemon) {
    this.description = pokemon.description
    this.height = pokemon.height
    this.id = pokemon.id
    this.name = pokemon.name
    this.order = pokemon.order
    this.sprite = pokemon.sprite
    this.stats = pokemon.stats
    this.types = pokemon.types
    this.weight = pokemon.weight
  }
}
