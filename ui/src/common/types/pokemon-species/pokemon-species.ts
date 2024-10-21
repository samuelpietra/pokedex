type FlavorText = {
  flavor_text: string
  language: {
    name: string
  }
}

namespace PokemonSpeciesAPI {
  export interface GetResponse {
    flavor_text_entries: FlavorText[]
    evolutuion_chain: {
      url: string
    }
    evolves_from_species: {
      name: string
      url: string
    }
  }
}

export type { PokemonSpeciesAPI }
