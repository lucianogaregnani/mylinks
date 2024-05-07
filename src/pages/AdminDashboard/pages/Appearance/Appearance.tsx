import useAuth from "../../../../hooks/useAuth";
import ProfilePictureSection from "./components/ProfilePictureSection";
import StyleCard from "./components/StyleCard";
import UsernameSection from "./components/UsernameSection";

function Appearance() {
  const { currentUser } = useAuth();

  return (
    <section className="overflow-y-auto mx-auto w-2/4 p-2">
      <h3 className="mt-2 mb-2 text-2xl font-semibold text-slate-700">
        Profile
      </h3>
      <article className="bg-white w-full p-3 rounded-3xl">
        <ProfilePictureSection currentUser={currentUser} />
        <UsernameSection userId={currentUser?.uid} />
      </article>
      <h3 className="mt-5 mb-2 text-2xl font-semibold text-slate-700">Style</h3>
      <article className="flex gap-4 bg-white w-full p-3 rounded-3xl">
        <StyleCard
          isSelected={true}
          text="Elegant"
          bgColor="from-white to-gray-100/50"
        />
      </article>
    </section>
  );
}

export default Appearance;
