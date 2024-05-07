import { Outlet } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import Preview from "../Preview/PreviewSection";
import useAuth from "../../hooks/useAuth";
import useSettings from "../../hooks/useSettings";
import useLinks from "../../hooks/useLinks";

function Layout() {
  const { currentUser } = useAuth();
  const { title, username } = useSettings({ userId: currentUser?.uid });
  const { links } = useLinks();

  return (
    <main className="h-screen md:pt-2 w-full bg-gray-300/20">
      <HeaderDesktop />
      <HeaderMobile />
      <section className="h-[89%] w-full flex">
        <Outlet />
        <section className="md:border-l-[1px] md:flex items-center justify-center hidden md:w-2/4">
          <div className="flex justify-center items-center overflow-hidden border-[0.6rem] border-gray-800 rounded-3xl h-[25rem] w-[13rem]">
            <Preview
              links={links}
              photoURL={currentUser?.photoURL || ""}
              title={title}
              username={username}
              type="preview"
            />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Layout;
