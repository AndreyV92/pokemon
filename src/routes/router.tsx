import { createRootRoute, createRoute } from "@tanstack/react-router";
import PokemonCard from "@/components/pokemons/PokemonCard";
import AbilityComponent from "@/components/abilities/Ability";
import Pages from "./Pages";

export const rootRoute = createRootRoute({
  component: Pages,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PokemonCard,
});

export const abilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ability/$abilityName",
  component: AbilityComponent,
});

export const routeTree = rootRoute.addChildren([indexRoute, abilityRoute]);
