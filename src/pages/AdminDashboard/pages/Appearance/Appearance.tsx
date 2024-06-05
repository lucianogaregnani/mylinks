import useAuth from "../../../../hooks/useAuth";
import useSettings from "../../../../hooks/useSettings";
import ProfilePictureSection from "./components/ProfilePictureSection";
import StyleSection from "./components/StyleSection";
import UsernameSection from "./components/UsernameSection";

function Appearance() {
  const { currentUser } = useAuth();
  const { setUsername, username, type, settingLoadingStatus } = useSettings({
    userId: currentUser?.uid,
  });

  return (
    <section className="overflow-y-auto mx-auto w-full md:w-2/4 p-2">
      <h3 className="mt-2 mb-2 text-2xl font-semibold text-slate-700">
        Profile
      </h3>
      <article className="bg-white w-full p-3 rounded-3xl">
        <ProfilePictureSection currentUser={currentUser} />
        <UsernameSection
          setUsername={setUsername}
          username={username}
          loadingStatus={settingLoadingStatus}
        />
      </article>
      <h3 className="mt-5 mb-2 text-2xl font-semibold text-slate-700">Style</h3>
      <StyleSection type={type} loadingStatus={settingLoadingStatus} />
    </section>
  );
}

export default Appearance;
