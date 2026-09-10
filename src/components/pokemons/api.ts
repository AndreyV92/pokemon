import type { Pokemon, PokemonDataFetch } from "@/types/types";

export async function getPokemonCardInfo(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      const pokemonsAlldata = await response.json();
  
      const pokemonFetchResults = pokemonsAlldata.results.map(
        async (pokemon: PokemonDataFetch) => {
          // console.log(pokemon)
          const pokemonResponse = await fetch(pokemon.url);
  
          return pokemonResponse.json();
        },
      );
      const pokemons = await Promise.all(pokemonFetchResults);
  
      return pokemons;
}