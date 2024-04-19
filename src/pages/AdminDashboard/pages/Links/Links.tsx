import ShareMyLink from "./components/ShareMyLink";
import ListOfLinks from "./components/ListOfLinks";
import AddLinkButton from "./components/AddLinkButton";
import AddHeaderButton from "./components/AddHeaderButton";

function Links() {
  return (
    <section className="max-w-2xl mx-auto min-h-screen flex gap-4 flex-col">
      <ShareMyLink />
      <div className="p-2 flex gap-4 flex-col">
        <AddLinkButton />
        <AddHeaderButton />
        <ListOfLinks />
      </div>
    </section>
  );
}

export default Links;
