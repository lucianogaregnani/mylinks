import { useLocation } from "react-router-dom";
import AppearanceIcon from "../Icons/AppearanceIcon";
import LinkIcon from "../Icons/LinkIcon";
import SectionIcon from "./SectionIcon";

const links = [
  {
    to: "/admin/links",
    text: "Links",
    icon: <LinkIcon />,
  },
  {
    to: "/admin/appearance",
    text: "Appearance",
    icon: <AppearanceIcon />,
  },
];

function NavSections() {
  const { pathname } = useLocation();

  return (
    <div className="flex gap-6 w-full">
      {links.map((link) => (
        <SectionIcon
          to={link.to}
          isSelected={pathname === link.to}
          key={link.to}
        >
          {link.icon}
          <span className="hidden md:block">{link.text}</span>
        </SectionIcon>
      ))}
    </div>
  );
}

export default NavSections;
