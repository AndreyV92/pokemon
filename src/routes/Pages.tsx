import { Outlet } from "@tanstack/react-router";

const Pages = () => {
  return (
    <>
      <h1 style={{marginBottom: "10px"}}>Покемоны</h1>
      <Outlet />
    </>
  );
};

export default Pages;
