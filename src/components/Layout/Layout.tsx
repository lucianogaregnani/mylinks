import { Outlet } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

function Layout() {
  return (
    <main className="md:px-2 md:pt-2 w-full bg-gray-300/20 min-h-screen">
      <HeaderDesktop />
      <HeaderMobile />
      <Outlet />
    </main>
  );
}

export default Layout;
