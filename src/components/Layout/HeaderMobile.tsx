import { Link } from "react-router-dom";
import LogoIcon from "../Icons/LogoIcon";
import NavSections from "./NavSections";
import LogoutButton from "./LogoutButton";

function HeaderMobile() {
  return (
    <header className="md:hidden sticky top-0 bg-white shadow-sm md:rounded-full flex gap-5 items-center justify-between text-sm font-semibold text-gray-600">
      <nav className="flex flex-col gap-3 w-full pt-2">
        <div className="flex justify-between px-3">
          <Link to="/">
            <LogoIcon />
          </Link>
          <LogoutButton />
        </div>
        <NavSections />
      </nav>
    </header>
  );
}

export default HeaderMobile;
