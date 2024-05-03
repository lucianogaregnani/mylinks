import { useParams } from "react-router-dom";
import Preview from "../../components/Preview/PreviewSection";
import useSettingBillboard from "./hooks/useSettingBillboard";
import useUserPhoto from "./hooks/useUserPhoto";
import useUserLinks from "./hooks/useUserLinks";

function MyLinks() {
  const { username } = useParams();
  const { setting } = useSettingBillboard(username);
  const { photoURL } = useUserPhoto(setting?.userId);
  const { links } = useUserLinks(setting?.userId);

  return (
    <main className="h-screen w-full">
      <Preview
        links={links}
        type="billboard"
        photoURL={photoURL}
        username={setting?.username}
        title={setting?.title}
      />
    </main>
  );
}

export default MyLinks;
