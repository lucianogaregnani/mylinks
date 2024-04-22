import { useEffect, useState } from "react";
import Button from "../../../../../../components/Button/Button";
import CloseButton from "./CloseButton";

interface AddModalProps {
  placeholder?: string;
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  onAdd: (newData: string) => void;
  validate: (newData: string) => string;
}

function AddModal({
  placeholder,
  children,
  isOpen,
  closeModal,
  onAdd,
  validate,
}: AddModalProps) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError("");
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [error]);

  const handleClick = () => {
    if (validate(data)) {
      setError(validate(data));
    } else {
      onAdd(data);
    }
  };

  return !isOpen ? (
    <>{children}</>
  ) : (
    <section className="flex flex-col w-full bg-white p-4 rounded-2xl">
      <CloseButton onClick={closeModal} />
      <div className="mb-3 flex gap-2 items-center">
        <h4 className="text-2xl font-bold">Enter {placeholder}</h4>
        {error && <span className="text-red-500">{error}</span>}
      </div>

      <div className="flex gap-3 w-full">
        <input
          type="text"
          className={`bg-gray-100 pl-3 hover:bg-gray-200/60 w-full rounded-xl ${
            error && "focus:outline-red-500"
          }`}
          placeholder={placeholder}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <Button disabled={!data} onClick={handleClick}>
          Add
        </Button>
      </div>
    </section>
  );
}

export default AddModal;
