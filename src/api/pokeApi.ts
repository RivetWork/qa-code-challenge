import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import type { PokemonListResponse, Pokemon } from '@features/pokemon/types/pokemonTypes';

export const pokeApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery,
  refetchOnFocus: false,
  refetchOnReconnect: true,
  keepUnusedDataFor: 60,
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListResponse, { limit: number; offset: number }>({
      query: ({ limit, offset }) => `pokemon?limit=${limit}&offset=${offset}`,
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    // TODO - Should return PokemonSpecies - https://pokeapi.co/docs/v2#pokemon-species:~:text=A%20Pok%C3%A9mon%20Species%20forms,Sandy%20and%20Wormadam%2DPlant.
    // getPokemonSpeciesByName: () => {}
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByNameQuery } = pokeApi;
