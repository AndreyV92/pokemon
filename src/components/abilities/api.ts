import type { AbilityResponse } from "@/types/types";

export async function getAbility(abilityName: string): Promise<AbilityResponse> {
  const response = await fetch(
      `https://pokeapi.co/api/v2/ability/${abilityName}`,
    );
    return response.json();
}