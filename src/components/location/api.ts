import type { PokemonLocations } from "@/types/types";

export async function getLocations(pokemonName: string): Promise<PokemonLocations[]> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}/encounters`,
  );

  return response.json();
}
