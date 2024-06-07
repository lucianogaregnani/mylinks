import { Navigate, Outlet } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import useAuth from "../../hooks/useAuth";
import useSettings from "../../hooks/useSettings";
import { MoonLoader } from "react-spinners";
import Preview from "../Preview/Preview";
import { useAppSelector } from "../../pages/AdminDashboard/hooks/useAppSelector";

function Layout() {
  const { currentUser, authLoadingStatus } = useAuth();
  const { title, username, type, settingLoadingStatus } = useSettings({
    userId: currentUser?.uid,
  });

  const links = useAppSelector((state) => state.links);

  if (authLoadingStatus)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <MoonLoader color="#393a3a" />
      </div>
    );

  if (!currentUser?.uid) return <Navigate to="/login" />;

  return (
    <main className="h-screen md:pt-2 w-full bg-gray-300/20">
      <HeaderDesktop />
      <HeaderMobile />
      <section className="h-[89%] w-full flex">
        <Outlet />
        <section className="md:border-l-[1px] md:flex items-center justify-center hidden md:w-2/4">
          <div className="flex justify-center items-center overflow-hidden border-[0.6rem] border-gray-800 rounded-3xl h-[25rem] w-[13rem]">
            <Preview
              isLoading={settingLoadingStatus}
              type={type}
              links={links}
              photoURL={currentUser?.photoURL}
              title={title}
              username={username}
              viewType="preview"
            />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Layout;
