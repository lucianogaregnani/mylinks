import { Link } from "react-router-dom";

function SectionIcon({
  isSelected,
  children,
  to,
}: {
  isSelected: boolean;
  children: React.ReactNode;
  to: string;
}) {
  return (
    <Link to={to} className="w-2/4 md:w-auto">
      <div
        className={`${
          isSelected && "border-b-2 border-slate-900 md:font-bold"
        } w-full flex flex-col items-center p-2 md:hover:bg-slate-100 md:rounded-md md:border-0 md:flex-row md:gap-2`}
      >
        {children}
      </div>
    </Link>
  );
}

export default SectionIcon;
