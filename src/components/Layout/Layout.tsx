import { Outlet } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

function Layout() {
  return (
    <main className="h-screen md:pt-2 w-full bg-gray-300/20">
      <HeaderDesktop />
      <HeaderMobile />
      <Outlet />
    </main>
  );
}

export default Layout;
