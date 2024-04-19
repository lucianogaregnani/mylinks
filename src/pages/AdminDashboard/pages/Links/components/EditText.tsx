import { useState } from "react";
import PencilIcon from "./Icons/PencilIcon";
import ButtonIcon from "./ButtonIcon";

function EditText({
  type,
  title,
  placeholder,
}: {
  type: "title" | "link";
  title: string;
  placeholder: string;
}) {
  const [text, setText] = useState(title);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <label className="flex gap-2 sm:w-[12rem] md:w-full cursor-pointer">
      <input
        className="pl-1 rounded-md"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={text}
      />
      <ButtonIcon content="edit" placement="right">
        <PencilIcon />
      </ButtonIcon>
    </label>
  );
}

export default EditText;
