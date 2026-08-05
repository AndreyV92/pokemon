import * as React from "react";
import {
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import PokemonCard from "../components/PokemonCard";
import AbilityComponent from "./ability";
import { RootComponent } from "./root";

export const rootRoute = createRootRoute({
  component: RootComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PokemonCard,
});

const abilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ability/$abilityName",
  component: AbilityComponent,
});


export const pokemonAbilityName = createRoute({
  getParentRoute: () => rootRoute,
  path: "$name",
  component: AbilityComponent
})



export const routeTree = rootRoute.addChildren([indexRoute, abilityRoute]);





