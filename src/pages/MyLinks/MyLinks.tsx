import { useParams } from "react-router-dom";
import Preview from "../../components/Preview/PreviewSection";
import useSettingBillboard from "./hooks/useSettingBillboard";
import useUserPhoto from "./hooks/useUserPhoto";
import useUserLinks from "./hooks/useUserLinks";

function MyLinks() {
  const { username } = useParams();
  const { setting, settingBillboardLoading } = useSettingBillboard(username);
  const { photoURL, userPhotoLoading } = useUserPhoto(setting?.userId);
  const { links, userLinksLoading } = useUserLinks(setting?.userId);

  return (
    <main className="h-screen w-full">
      <Preview
        isLoading={
          settingBillboardLoading || userPhotoLoading || userLinksLoading
        }
        type={setting?.type || "elegant"}
        links={links}
        viewType="billboard"
        photoURL={photoURL}
        username={setting?.username}
        title={setting?.title}
      />
    </main>
  );
}

export default MyLinks;
