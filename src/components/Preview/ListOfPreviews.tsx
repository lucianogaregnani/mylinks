import useLinks from "../../hooks/useLinks";
import PreviewCard from "./PreviewCard";

function ListOfPreviews({
  titleSize,
  imageSize,
  cardSize,
}: {
  titleSize: string;
  imageSize: string;
  cardSize: string;
}) {
  const { links } = useLinks();

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
