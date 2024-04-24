import { useState } from "react";
import ButtonIcon from "./Buttons/ButtonIcon";
import TrashIcon from "./Icons/TrashIcon";
import MoveIcon from "./Icons/MoveIcon";
import { Draggable } from "react-beautiful-dnd";
import useLinks from "../../../hooks/useLinks";
import EditText from "./Edit/EditText";
import validateTitle from "../utils/validateTitle";
import validateUrl from "../utils/validateUrl";
import EditThumbnail from "./Edit/EditThumbnail";
import { Link } from "../../../../../types/Link.type";

function LinkCard({
  id,
  title,
  link,
  isActive,
  thumbnailUrl,
  index,
}: Link & { index: number }) {
  const [active, setActive] = useState(isActive);
  const { deleteLink, updateLink, updateTitle, updateIsActive } = useLinks();

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="bg-white rounded-2xl flex items-center gap-4 w-full mb-3"
        >
          <div
            {...provided.dragHandleProps}
            className="h-36 w-8 justify-center rounded-l-2xl flex items-center"
          >
            <MoveIcon />
          </div>
          <div className="flex justify-between w-full px-2">
            <div className="flex gap-5 items-center">
              <header className="flex flex-col gap-2">
                <EditText
                  validation={validateTitle}
                  onClick={(newTitle: string) => updateTitle(newTitle, id)}
                  title={title}
                  placeholder="Enter a title"
                />
                <EditText
                  validation={validateUrl}
                  onClick={(newLink: string) => updateLink(newLink, id)}
                  title={link}
                  placeholder="Enter a link"
                />
                <nav className="flex gap-2">
                  <EditThumbnail thumbnailUrl={thumbnailUrl} linkId={id} />
                  <ButtonIcon content="Delete" onClick={() => deleteLink(id)}>
                    <TrashIcon />
                  </ButtonIcon>
                </nav>
              </header>
            </div>
            <label className="inline-flex items-center me-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={active}
                onChange={() => {
                  setActive(!active);
                  updateIsActive(!active, id);
                }}
              />
              <div className="relative w-9 h-5 bg-red-600 rounded-full focus:outline-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1rem] after:w-[1rem] after:transition-all peer-checked:bg-green-600" />
            </label>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default LinkCard;
