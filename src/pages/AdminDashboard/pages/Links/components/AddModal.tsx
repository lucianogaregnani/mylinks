import { useState } from "react";
import Button from "../../../../../components/Button/Button";
import CloseButton from "./CloseButton";

interface AddModalProps {
  placeholder?: string;
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  onAdd: (url: string) => void;
}

function AddModal({
  placeholder,
  children,
  isOpen,
  closeModal,
  onAdd,
}: AddModalProps) {
  const [data, setData] = useState("");

  return !isOpen ? (
    <>{children}</>
  ) : (
    <section className="flex flex-col w-full bg-white p-4 rounded-2xl">
      <CloseButton onClick={closeModal} />
      <h4 className="mb-3 text-2xl font-bold">Enter {placeholder}</h4>
      <div className="flex gap-3 w-full">
        <input
          type="text"
          className="bg-gray-100 pl-3 hover:bg-gray-200/60 w-full rounded-xl"
          placeholder={placeholder}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <Button
          disabled={!data}
          onClick={() => {
            onAdd(data);
          }}
        >
          Add
        </Button>
      </div>
    </section>
  );
}

export default AddModal;
