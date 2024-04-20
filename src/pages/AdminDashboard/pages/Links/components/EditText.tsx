import { useEffect, useState } from "react";
import PencilIcon from "./Icons/PencilIcon";
import ButtonIcon from "./ButtonIcon";

function EditText({
  validation,
  onClick,
  title,
  placeholder,
}: {
  validation: (newText: string) => string;
  onClick: (newText: string) => void;
  title: string;
  placeholder: string;
}) {
  const [text, setText] = useState(title);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const message = validation(text);

    if (message.length === 0) {
      onClick(text);
    } else {
      setError(message);
    }
  };

  return (
    <label className="flex items-center gap-2 sm:w-[13rem] md:w-full cursor-pointer">
      <input
        className={`${
          error && "focus:outline-red-500 focus:outline-none"
        } pl-1 rounded-md`}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={text}
      />
      <ButtonIcon content="edit" placement="right" onClick={handleClick}>
        <PencilIcon />
      </ButtonIcon>
      {error && (
        <p className="text-red-500 text-[0.7rem] md:text-sm">{error}</p>
      )}
    </label>
  );
}

export default EditText;
