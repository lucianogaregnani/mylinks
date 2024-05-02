import useLinks from "../../hooks/useLinks";
import PreviewCard from "./PreviewCard";

function ListOfPreviews() {
  const { links } = useLinks();

  return (
    <section className="max-w-md w-full flex flex-col gap-2">
      {links.map(
        ({ link, title, thumbnailUrl, isActive, id }) =>
          isActive &&
          title && (
            <PreviewCard
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
