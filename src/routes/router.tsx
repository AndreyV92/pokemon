import { createRootRoute, createRoute } from "@tanstack/react-router";
import Pages from "./Pages";
import ReadMore from "@/components/ReadMore/ReadMore";
import Home from "@/components/Home/Home";

export const rootRoute = createRootRoute({
  component: Pages,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const readMoreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/readMore/$pokemonName",
  component: ReadMore,
});

// export const abilityRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/ability/$abilityName",
//   component: AbilityComponent,
// });

// export const locationsRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/location/$pokemonName",
//   component: Location,
// });

export const routeTree = rootRoute.addChildren([
  indexRoute,
  // abilityRoute,
  // locationsRoute,
  readMoreRoute,
]);
