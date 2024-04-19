import { useState } from "react";
import Button from "../../../../../components/Button/Button";
import DeleteIcon from "./Icons/DeleteIcon";

interface AddModalProps {
  placeholder?: string;
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

function AddModal({
  placeholder,
  children,
  isOpen,
  closeModal,
}: AddModalProps) {
  const [data, setData] = useState("");

  return !isOpen ? (
    <>{children}</>
  ) : (
    <section className="flex flex-col w-full bg-white p-4 rounded-2xl">
      <button
        onClick={closeModal}
        className="hover:bg-red-400 bg-gray-100 hover:text-white transition-all p-2 rounded-full self-end"
      >
        <DeleteIcon />
      </button>
      <h4 className="mb-3 text-2xl font-bold">Enter {placeholder}</h4>
      <div className="flex gap-3 w-full">
        <input
          type="text"
          className="bg-gray-100 pl-3 hover:bg-gray-200/60 w-full rounded-xl"
          placeholder={placeholder}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <Button disabled={!data}>Add</Button>
      </div>
    </section>
  );
}

export default AddModal;
