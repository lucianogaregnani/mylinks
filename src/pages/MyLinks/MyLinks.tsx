import { useParams } from "react-router-dom";
import Preview from "../../components/Preview/PreviewSection";
import useSettingBillboard from "./hooks/useSettingBillboard";
import useUserPhoto from "./hooks/useUserPhoto";

function MyLinks() {
  const { username } = useParams();
  const { setting } = useSettingBillboard(username);
  const { photoURL } = useUserPhoto(setting?.userId);

  return (
    <main className="h-screen w-full">
      <Preview
        type="billboard"
        photoURL={photoURL}
        username={setting?.username}
        title={setting?.title}
      />
    </main>
  );
}

export default MyLinks;
