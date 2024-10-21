enum PokemonStatus {
  Unknown = 'unknown',
  Seen = 'seen',
  Captured = 'captured',
}

type PokemonStatName =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed'

type PokemonTypeName =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'stellar'
  | 'unknown'
  | 'water'

type PokemonStat = {
  base_stat: number
  effort: number
  stat: {
    name: PokemonStatName
    url: string
  }
}

type PokemonType = {
  slot: number
  type: {
    name: PokemonTypeName
    url: string
  }
}

type Sprites = {
  other: {
    'official-artwork': {
      front_default: string
    }
  }
}

namespace PokemonAPI {
  export interface GetResponse {
    height: number
    id: number
    name: string
    order: number
    sprites: Sprites
    stats: PokemonStat[]
    types: PokemonType[]
    weight: number
  }

  export interface RequestParams {
    id: string
  }
}

export type { PokemonAPI, PokemonStatName }
export { PokemonStatus }
