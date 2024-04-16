import { Link } from "react-router-dom";
import LogoIcon from "../Icons/LogoIcon";
import NavSections from "./NavSections";
import LogoutButton from "./LogoutButton";

function HeaderDesktop() {
  return (
    <header className="hidden sticky top-2 bg-white px-4 py-2 shadow-sm md:rounded-full md:flex gap-5 items-center justify-between text-sm font-semibold text-gray-600">
      <nav className="flex items-center gap-3">
        <Link to="/">
          <LogoIcon />
        </Link>
        <NavSections />
      </nav>
      <LogoutButton />
    </header>
  );
}

export default HeaderDesktop;
