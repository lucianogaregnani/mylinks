import useLinks from "../../../../hooks/useLinks";
import PreviewCard from "./PreviewCard";

function ListOfPreviews() {
  const { links } = useLinks();

  return (
    <section className="w-full flex flex-col gap-2">
      {links.map(
        ({ link, title, thumbnailUrl, isActive }) =>
          isActive &&
          title && (
            <PreviewCard
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
