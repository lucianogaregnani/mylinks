import { useState } from "react";
import AddHeaderButton from "./Buttons/AddHeaderButton";

function Header() {
  const [title, setTitle] = useState("");

  return title ? (
    <div
      onClick={() => setTitle("")}
      className="hover:before:flex text-3xl overflow-hidden hover:before:items-center hover:before:justify-center  hover:before:w-full hover:before:h-full hover:before:absolute hover:before:inset-0 hover:before:bg-red-500/90 font-bold text-white hover:before:content-['Remove'] relative p-5 border-2 border-violet-400 hover:border-red-500 transition-all cursor-pointer bg-white rounded-2xl flex items-center justify-center w-full"
    >
      <h1 className="text-4xl text-slate-900 font-bold">{title}</h1>
    </div>
  ) : (
    <AddHeaderButton handleAdd={setTitle} />
  );
}

export default Header;
