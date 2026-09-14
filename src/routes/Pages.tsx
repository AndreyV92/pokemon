import { Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header/Header";
import Discover from "@/components/Discover/Discover";
const Pages = () => {
  return (
    <div className="bg-[white] min-h-screen max-w-[1440px]">
      <Header />
      <Discover />
      <Outlet />
    </div>
  );
};

export default Pages;
