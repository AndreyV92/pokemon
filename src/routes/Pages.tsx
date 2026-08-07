import { Outlet } from "@tanstack/react-router";

const Pages = () => {
  return (
    <>
      <h1>Покемоны</h1>
      <Outlet />
    </>
  );
};

export default Pages;
