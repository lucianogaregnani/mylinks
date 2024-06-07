import { useParams } from "react-router-dom";
import Preview from "../../components/Preview/Preview";
import useSettingBillboard from "./hooks/useSettingBillboard";
import useUserPhoto from "./hooks/useUserPhoto";
import useUserLinks from "./hooks/useUserLinks";

function MyLinks() {
  const { username } = useParams();
  const { setting, settingBillboardLoading, error } =
    useSettingBillboard(username);
  const { photoURL, userPhotoLoading } = useUserPhoto(setting?.userId);
  const { links, userLinksLoading } = useUserLinks(setting?.userId);

  if (error)
    return (
      <main className="text-slate-600 flex flex-col gap-2 items-center justify-center h-screen w-full">
        <h1 className="text-6xl font-bold text-indigo-500">Ups</h1>
        <p className="text-2xl font-semibold">There was an error!</p>
        <p className="text-4xl">{error}</p>
      </main>
    );

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
