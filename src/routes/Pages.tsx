import { Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header/Header";
const Pages = () => {
  return (
    <div className="bg-[#5e8bdb] min-h-screen">
      <Header />
      <h1 className="mb-3 px-8 text-center text-lg font-semibold text-[30px] ">
        Покемоны
      </h1>
      <Outlet />
    </div>
  );
};

export default Pages;
