import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import ImageIcon from "./Icons/ImageIcon";
import PencilIcon from "./Icons/PencilIcon";
import TrashIcon from "./Icons/TrashIcon";
import MoveIcon from "./Icons/MoveIcon";
import { Draggable } from "react-beautiful-dnd";

interface LinkProps {
  id: string;
  title: string;
  link: string;
  isActive: boolean;
  index: number;
}

function Link({ id, title, link, isActive, index }: LinkProps) {
  const [active, setIsActive] = useState(isActive);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          key={id}
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
                <div className="flex gap-2 sm:w-[12rem] md:w-full">
                  <p className=" whitespace-nowrap overflow-hidden text-ellipsis">
                    {title}
                  </p>
                  <button>
                    <PencilIcon />
                  </button>
                </div>
                <div className="flex gap-2 w-[12rem] md:w-full">
                  <p className=" whitespace-nowrap overflow-hidden text-ellipsis">
                    {link}
                  </p>
                  <button>
                    <PencilIcon />
                  </button>
                </div>
                <footer className="flex gap-2">
                  <ButtonIcon content="Thumbnail">
                    <ImageIcon />
                  </ButtonIcon>

                  <ButtonIcon content="Delete">
                    <TrashIcon />
                  </ButtonIcon>
                </footer>
              </header>
            </div>
            <label className="inline-flex items-center me-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={active}
                onChange={() => setIsActive(!active)}
              />
              <div className="relative w-9 h-5 bg-red-600 rounded-full focus:outline-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1rem] after:w-[1rem] after:transition-all peer-checked:bg-green-600" />
            </label>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Link;
