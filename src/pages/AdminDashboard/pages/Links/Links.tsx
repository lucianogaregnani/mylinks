import ShareMyLink from "./components/Billboard/ShareMyLink";
import ListOfLinks from "./components/ListOfLinks";
import AddLinkButton from "./components/Buttons/AddLinkButton";
import AddHeaderButton from "./components/Buttons/AddHeaderButton";

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
