import useAuth from "../../../../../../hooks/useAuth";
import useSettings from "../../../../hooks/useSettings";
import ListOfPreviews from "./ListOfPreviews";

function PreviewSection() {
  const { currentUser } = useAuth();
  const { username, title } = useSettings({ userId: currentUser?.uid });

  return (
    <article className="md:flex justify-center items-center w-2/4 hidden">
      <div className="bg-gradient-to-r from-purple-300 to-pink-300 p-2 flex flex-col items-center bg-white border-[0.6rem] border-gray-800 rounded-3xl h-[25rem] w-[13rem] bg-white-400">
        <img
          className="w-[4rem] rounded-full mt-6"
          src={currentUser?.photoURL || ""}
          alt="User image"
        />
        <div className="text-sm font-semibold">@{username}</div>
        <h4 className="mt-2 text-xl font-bold">{title}</h4>
        <ListOfPreviews />
      </div>
    </article>
  );
}

export default PreviewSection;
