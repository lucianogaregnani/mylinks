import ShareMyLink from "./Billboard/ShareMyLink";
import AddLinkButton from "./Buttons/AddLinkButton";
import Header from "./Header";
import ListOfLinks from "./ListOfLinks";

function LinkSection() {
  return (
    <section className="md:p-2 w-full md:w-2/4 mx-auto flex gap-4 flex-col md:overflow-y-auto">
      <ShareMyLink />
      <div className="p-2 md:p-0 flex gap-4 flex-col">
        <AddLinkButton />
        <Header />
        <ListOfLinks />
      </div>
    </section>
  );
}

export default LinkSection;
