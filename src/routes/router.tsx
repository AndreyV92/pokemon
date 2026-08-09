import { createRootRoute, createRoute } from "@tanstack/react-router";
import PokemonCard from "@/components/pokemons/PokemonCard";
import AbilityComponent from "@/components/abilities/Ability";
import Pages from "./Pages";
import type { AbilityResponse, Pokemon, PokemonDataFetch } from "@/types/types";

export const rootRoute = createRootRoute({
  component: Pages,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: async (): Promise<Pokemon[]> => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokemonsAlldata = await response.json();

    const pokemonFetchResults = pokemonsAlldata.results.map(
      async (pokemon: PokemonDataFetch) => {
        // console.log(pokemon)
        const pokemonResponse = await fetch(pokemon.url);
        return pokemonResponse.json();
      },
    );
    const pokemons = Promise.all(pokemonFetchResults);
    return pokemons;
  },
  component: PokemonCard,
});

export const abilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ability/$abilityName",
  loader: async ({ params }): Promise<AbilityResponse> => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/ability/${params.abilityName}`,
    );
    return response.json();
  },
  component: AbilityComponent,
});

export const routeTree = rootRoute.addChildren([indexRoute, abilityRoute]);
