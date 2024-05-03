import Preview from "../../../../components/Preview/PreviewSection";
import useAuth from "../../../../hooks/useAuth";
import useLinks from "../../../../hooks/useLinks";
import useSettings from "../../../../hooks/useSettings";
import LinkSection from "./components/LinkSection";

function Links() {
  const { currentUser } = useAuth();
  const { title, username } = useSettings({ userId: currentUser?.uid });
  const { links } = useLinks();

  return (
    <section className="h-[89%] w-full flex">
      <LinkSection />
      <section className="md:flex items-center justify-center hidden md:w-2/4">
        <div className="flex justify-center items-center overflow-hidden border-[0.6rem] border-gray-800 rounded-3xl h-[25rem] w-[13rem]">
          <Preview
            links={links}
            photoURL={currentUser?.photoURL || ""}
            title={title}
            username={username}
            type="preview"
          />
        </div>
      </section>
    </section>
  );
}

export default Links;
