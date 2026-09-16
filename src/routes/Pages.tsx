import Header from "@/components/Header/Header";
import { Outlet } from "@tanstack/react-router";
const Pages = () => {
  return (
    <div className="bg-[white] min-h-screen max-w-[1440px]">
      <Header/>
      <Outlet />
    </div>
  );
};

export default Pages;
