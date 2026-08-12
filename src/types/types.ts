import type { ReactNode } from "react";

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  weight: number;
  height: number;
  abilities: PokemonAbility[];
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
    id: string;
  };

};

export type AbilityResponse = {
  effect_entries: PokemonEffect[];
}

export type PokemonEffect = {
  effect: string;
  id: string;
}

export type PokemonDataFetch = {
  name: string;
  url: string;
};

export type ButtonType = {
  onClick: () => void,
  className: string,
  children: ReactNode
}