import ListOfPreviews from "./ListOfPreviews";

interface PreviewProps {
  type: "preview" | "billboard";
  photoURL: string | undefined;
  username: string | undefined;
  title: string | undefined;
}

function Preview({ type, photoURL, username, title }: PreviewProps) {
  return (
    <section className="overflow-y-auto bg-gradient-to-t from-purple-300 to-purple-200 p-2 flex flex-col items-center h-full w-full">
      <img
        className="w-[4rem] rounded-full mt-6"
        src={photoURL}
        alt="User image"
      />
      <div className="text-sm font-semibold">@{username}</div>
      <h4 className="my-2 text-xl font-bold">{title}</h4>
      <ListOfPreviews />
    </section>
  );
}

export default Preview;
