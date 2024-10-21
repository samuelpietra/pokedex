import { Request, Response } from "express";

import { Pokemon } from "../../../ui/src/common/classes/Pokemon/Pokemon";
import { PokemonStatus } from "../../../ui/src/common/types/pokemon/pokemon";
import { PokemonAPI, PokemonSpeciesAPI } from "../../../ui/src/common/types";
import { http } from "../http";
import axios from "axios";

const storedPokemons: Pokemon[] = [];

async function fetchPokemonById(id: string) {
  try {
    const [pokemonResponse, speciesResponse] = await Promise.all([
      http.get<PokemonAPI.GetResponse>(`/v2/pokemon/${id}`),
      http.get<PokemonSpeciesAPI.GetResponse>(`/v2/pokemon-species/${id}`),
    ]);

    const pokemon = {
      description: speciesResponse.data.flavor_text_entries
        .find((entry) => entry.language.name === "en")
        ?.flavor_text.replace(/[\n\f]/g, " ") as string,
      height: pokemonResponse.data.height,
      id: pokemonResponse.data.id,
      name: pokemonResponse.data.name,
      order: pokemonResponse.data.order,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      stats: pokemonResponse.data.stats.map(({ base_stat, stat }) => ({
        name: stat.name,
        points: base_stat,
      })),
      status: PokemonStatus.Unknown,
      types: pokemonResponse.data.types.map(({ type }) => type.name),
      weight: pokemonResponse.data.weight,
    };

    return new Pokemon(pokemon);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        JSON.stringify({
          name: error.response?.status,
          message: error.response?.statusText,
        }),
      );
    }
  }
}

async function fetchPaginatedPokemons(offset: number, limit: number) {
  try {
    const { data } = await http.get("/v2/pokemon", {
      params: { offset, limit },
    });

    const pokemons: Pokemon[] = await Promise.all(
      data.results.map(async ({ url }: { url: string }) => {
        const [id] = url.split("/").slice(-2);
        return fetchPokemonById(id);
      }),
    );

    return pokemons;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        JSON.stringify({
          name: error.response?.status,
          message: error.response?.statusText,
        }),
      );
    }
  }
}

export const PokemonsController = {
  populatePokemonById: async (request: Request, response: Response) => {
    const { id } = request.params;

    const fetchedPokemon = storedPokemons.find(
      (pokemon) => pokemon.id === Number(id),
    );

    if (fetchedPokemon) {
      response.json(fetchedPokemon);
      return;
    }

    try {
      const fetchedPokemon = await fetchPokemonById(id);

      if (fetchedPokemon) {
        storedPokemons.push(fetchedPokemon);
        response.json(fetchedPokemon);
      }
    } catch (error) {
      if (error instanceof Error) {
        const { name: status, message } = JSON.parse(error.message);
        response.status(status).send({ status, message });
      }
    }
  },

  populatePokemonsByPage: async (request: Request, response: Response) => {
    const limit = Number(request.query.limit);
    const offset = Number(request.query.offset);

    if (limit + offset <= storedPokemons.length) {
      response.json(storedPokemons.slice(offset, limit + offset));
      return;
    }

    try {
      const fetchedPokemons = await fetchPaginatedPokemons(offset, limit);

      if (fetchedPokemons?.length) {
        storedPokemons.push(...fetchedPokemons);
        response.json(fetchedPokemons);
      }
    } catch (error) {
      if (error instanceof Error) {
        const { name: status, message } = JSON.parse(error.message);
        response.status(status).send({ status, message });
      }
    }
  },

  updatePokemonStatus: (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const status = request.body.status as PokemonStatus;

    const match = storedPokemons.find((pokemon) => pokemon.id === Number(id));

    if (match) {
      match.status = status;
      response.json(match);
    } else {
      response.status(404).send({ status: 404, message: "Not Found" });
    }
  },
};
