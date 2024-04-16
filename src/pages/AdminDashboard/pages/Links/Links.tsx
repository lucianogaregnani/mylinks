import Button from "../../../../components/Button/Button";
import HeaderIcon from "./components/Icons/HeaderIcon";
import PlusIcon from "./components/Icons/PlusIcon";
import ShareMyLink from "./components/ShareMyLink";

const myLinks = [
  {
    id: 1,
    title: "www.linkedin.com",
    link: "https://www.linkedin.com/in/luciano-garegnani/",
    isActive: false,
  },
  {
    id: 2,
    title: "www.twitter.com",
    link: "https://twitter.com/home",
    isActive: true,
  },
  {
    id: 3,
    title: "www.facebook.com",
    link: "www.facebook.com",
    isActive: true,
  },
];

function Links() {
  return (
    <section className="max-w-2xl mx-auto min-h-screen flex items-start gap-4 flex-col">
      <ShareMyLink />
      <Button size="full">
        <PlusIcon />
        Add Link
      </Button>
      <Button size="medium" color="transparent" textSize="small">
        <div className="flex gap-1 items-center">
          <HeaderIcon />
          Add header
        </div>
      </Button>
      <article>
        {myLinks.map(({ id, title, link, isActive }) => (
          <div key={id}>
            <div>:::</div>
            <div>
              <header>
                <div>
                  <input type="text" defaultValue={title} />
                  pencil
                </div>
                <div>
                  <input type="text" defaultValue={link} />
                  pencil
                </div>
              </header>
              <footer>
                <div>img</div>
                trash
              </footer>
            </div>

            <input type="checkbox" checked={isActive} />
          </div>
        ))}
      </article>
    </section>
  );
}

export default Links;
