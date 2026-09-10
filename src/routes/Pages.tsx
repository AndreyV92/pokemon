import { Outlet } from "@tanstack/react-router";

const Pages = () => {
  return (
    <>
      <h1 className="mb-3 px-8 text-center text-lg font-semibold" >Покемоны</h1>
      <Outlet />
    </>
  );
};

export default Pages;
