import { Outlet } from "@tanstack/react-router";
import React from "react";

export const RootComponent = () => {
  return (
      <React.Fragment>
        <h1>Покемоны</h1>
        <Outlet />
      </React.Fragment>
    );
}