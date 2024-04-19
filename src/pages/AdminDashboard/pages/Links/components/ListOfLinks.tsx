import { useState } from "react";
import Link from "./Link";
import {
  DragDropContext,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";

const myLinks = [
  {
    id: "1",
    title: "www.linkedin.com",
    link: "https://www.linkedin.com/in/luciano-garegnani/",
    isActive: true,
  },
  {
    id: "2",
    title: "www.twitter.com",
    link: "https://twitter.com/home",
    isActive: true,
  },
  {
    id: "3",
    title: "www.facebook.com",
    link: "www.facebook.com",
    isActive: true,
  },
];

function ListOfLinks() {
  const [links, setLinks] = useState(myLinks);

  const handleDragEnd = (results: DropResult) => {
    const { destination, source } = results;
    const newLinks = [...links];

    if (!destination) return;
    if (destination.index === source.index) return;

    const [removedLink] = newLinks.splice(source.index, 1);

    newLinks.splice(destination?.index, 0, removedLink);

    setLinks(newLinks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <article
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-full"
          >
            {links.map(({ id, title, link, isActive }, index) => (
              <Link
                index={index}
                id={id}
                title={title}
                link={link}
                isActive={isActive}
                key={id}
              />
            ))}
            {provided.placeholder}
          </article>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListOfLinks;
