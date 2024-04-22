import LinkCard from "./LinkCard";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import useLinks from "../../../hooks/useLinks";

function ListOfLinks() {
  const { links, setLinks } = useLinks();

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
            {links.map(
              ({ id, title, link, isActive, thumbnailUrl, userId }, index) => (
                <LinkCard
                  index={index}
                  id={id}
                  thumbnailUrl={thumbnailUrl}
                  userId={userId}
                  title={title}
                  link={link}
                  isActive={isActive || false}
                  key={id}
                />
              )
            )}
            {provided.placeholder}
          </article>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListOfLinks;
