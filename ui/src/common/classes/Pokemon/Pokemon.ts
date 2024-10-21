import { PokemonStatus } from '../../../common/types/pokemon/pokemon'
import { AbstractPokemon } from './AbstractPokemon'

export class Pokemon extends AbstractPokemon {
  status: PokemonStatus

  constructor(pokemon: Pokemon) {
    super(pokemon)
    this.status = PokemonStatus.Unknown
  }
}
