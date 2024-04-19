import Button from "../../../../components/Button/Button";
import HeaderIcon from "./components/Icons/HeaderIcon";
import ShareMyLink from "./components/ShareMyLink";
import ListOfLinks from "./components/ListOfLinks";
import AddLinkButton from "./components/AddLinkButton";

function Links() {
  return (
    <section className="max-w-2xl mx-auto min-h-screen flex gap-4 flex-col">
      <ShareMyLink />
      <div className="p-2 flex gap-4 flex-col">
        <AddLinkButton />
        <Button size="medium" color="transparent" textSize="small">
          <div className="flex gap-1 items-center">
            <HeaderIcon />
            Add header
          </div>
        </Button>
        <ListOfLinks />
      </div>
    </section>
  );
}

export default Links;
