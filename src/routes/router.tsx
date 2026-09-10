import { createRootRoute, createRoute } from "@tanstack/react-router";
import PokemonCard from "@/components/pokemons/PokemonCard";
import AbilityComponent from "@/components/abilities/Ability";
import Pages from "./Pages";
import Location from "@/components/location/Location";

export const rootRoute = createRootRoute({
  component: Pages,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PokemonCard,
});

export const abilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ability/$abilityName",
  component: AbilityComponent,
});

export const locationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/location/$pokemonName",
  component: Location,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  abilityRoute,
  locationsRoute,
]);
