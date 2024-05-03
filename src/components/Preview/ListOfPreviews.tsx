import { Link } from "../../types/Link.type";
import PreviewCard from "./PreviewCard";

function ListOfPreviews({
  titleSize,
  imageSize,
  cardSize,
  links,
}: {
  titleSize: string;
  imageSize: string;
  cardSize: string;
  links: Link[];
}) {
  return (
    <section className="max-w-md w-full flex flex-col gap-2">
      {links.map(
        ({ link, title, thumbnailUrl, isActive, id }) =>
          isActive &&
          title && (
            <PreviewCard
              titleSize={titleSize}
              imageSize={imageSize}
              cardSize={cardSize}
              key={id}
              title={title}
              thumbnailUrl={thumbnailUrl}
              link={link}
            />
          )
      )}
    </section>
  );
}

export default ListOfPreviews;
