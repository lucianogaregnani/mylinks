import useAuth from "../../../../hooks/useAuth";
import ProfilePictureSection from "./components/ProfilePictureSection";
import UsernameSection from "./components/UsernameSection";

function Profile() {
  const { currentUser } = useAuth();

  return (
    <section className="max-w-xl mx-auto flex flex-col items-center w-full gap-5">
      <h1 className="mt-2 text-4xl font-bold text-slate-800 underline">
        Profile
      </h1>
      <ProfilePictureSection currentUser={currentUser} />
      <UsernameSection userId={currentUser?.uid} />
    </section>
  );
}

export default Profile;
