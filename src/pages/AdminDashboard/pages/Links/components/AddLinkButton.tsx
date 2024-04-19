import { useState } from "react";
import Button from "../../../../../components/Button/Button";
import PlusIcon from "./Icons/PlusIcon";
import DeleteIcon from "./Icons/DeleteIcon";

function AddLinkButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");

  return !isOpen ? (
    <Button size="full" onClick={() => setIsOpen(true)}>
      <PlusIcon />
      Add Link
    </Button>
  ) : (
    <section className="flex flex-col w-full bg-white p-4 rounded-2xl">
      <button
        onClick={() => setIsOpen(false)}
        className="hover:bg-red-400 bg-gray-100 hover:text-white transition-all p-2 rounded-full self-end"
      >
        <DeleteIcon />
      </button>
      <h4 className="mb-3 text-2xl font-bold">Enter URL</h4>
      <div className="flex gap-3 w-full">
        <input
          type="text"
          className="bg-gray-100 pl-3 hover:bg-gray-200/60 w-full rounded-xl"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button disabled={!url}>Add</Button>
      </div>
    </section>
  );
}

export default AddLinkButton;
