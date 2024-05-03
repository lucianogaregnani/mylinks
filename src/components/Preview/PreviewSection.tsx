import ListOfPreviews from "./ListOfPreviews";

interface PreviewProps {
  type: "preview" | "billboard";
  photoURL: string | undefined;
  username: string | undefined;
  title: string | undefined;
}

const typeConfig = {
  billboard: {
    imageSize: "w-[9rem]",
    usernameSize: "text-xl",
    titleSize: "text-3xl",
    imageCard: "w-[2.6rem]",
    textCard: "text-xl",
    cardSize: "min-h-[3.5rem]",
  },
  preview: {
    imageSize: "w-[5rem]",
    usernameSize: "text-sm",
    titleSize: "text-xl",
    imageCard: "w-[1.6rem]",
    textCard: "text-sm",
    cardSize: "min-h-[2.5rem]",
  },
};

function Preview({ type, photoURL, username, title }: PreviewProps) {
  const { imageSize, usernameSize, titleSize, textCard, imageCard, cardSize } =
    typeConfig[type];

  return (
    <section className="overflow-y-auto bg-gradient-to-t from-purple-200 to-purple-100 p-2 flex flex-col items-center h-full w-full">
      <img
        className={`${imageSize} rounded-full mt-6`}
        src={photoURL}
        alt="User image"
      />
      <div className={`${usernameSize} font-semibold`}>@{username}</div>
      <h4 className={`${titleSize} my-2 font-bold`}>{title}</h4>
      <ListOfPreviews
        imageSize={imageCard}
        titleSize={textCard}
        cardSize={cardSize}
      />
    </section>
  );
}

export default Preview;
