import { Outlet } from "@tanstack/react-router";

const Pages = () => {
  return (
    <div className="bg-[#5e8bdb] min-h-screen">
      <h1 className="mb-3 px-8 text-center text-lg font-semibold text-[30px] ">
        Покемоны
      </h1>
      <Outlet />
    </div>
  );
};

export default Pages;
