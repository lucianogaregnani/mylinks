import { Link, Outlet } from "react-router-dom";
import ButtonForm from "../../../components/Button/ButtonForm";

function Layout() {
  return (
    <section className="md:px-2 md:pt-2 w-full bg-gray-300/20 min-h-screen">
      <header className="hidden sticky top-0 bg-white px-4 py-2 shadow-sm md:rounded-full md:flex gap-5 items-center justify-between text-sm font-semibold text-gray-600">
        <nav className="flex items-center gap-3">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9"
            >
              <path
                fillRule="evenodd"
                d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <Link to="">
            <div className="gap-1 flex items-center rounded-md p-2 hover:bg-slate-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                />
              </svg>
              Links
            </div>
          </Link>
          <Link to="">
            <div className="gap-1 flex items-center rounded-md p-2 hover:bg-slate-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
              <span>Appearance</span>
            </div>
          </Link>
        </nav>
        <div className="flex gap-3">
          <ButtonForm color="secondary" size="medium">
            Sign Out
          </ButtonForm>
          <button className="h-[2.7rem] w-[2.7rem] hover:border-2 border-slate-200 bg-cyan-500 rounded-full" />
        </div>
      </header>

      <header className="md:hidden sticky top-0 bg-white shadow-sm md:rounded-full flex gap-5 items-center justify-between text-sm font-semibold text-gray-600">
        <nav className="flex flex-col gap-3 w-full pt-2">
          <div className="flex justify-between px-3">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <div className="flex gap-3">
              <ButtonForm color="secondary" size="medium">
                Sign Out
              </ButtonForm>
              <button className="h-[2.7rem] w-[2.7rem] hover:border-2 border-slate-200 bg-cyan-500 rounded-full" />
            </div>
          </div>
          <div className="flex gap-6 w-full">
            <Link to="" className="w-2/4">
              <div className="border-b-2 border-slate-900 w-full flex flex-col items-center p-2 hover:bg-slate-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                  />
                </svg>
                Links
              </div>
            </Link>
            <Link to="" className="w-2/4">
              <div className="flex flex-col items-center rounded-md p-2 hover:bg-slate-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
                <span>Appearance</span>
              </div>
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </section>
  );
}

export default Layout;
