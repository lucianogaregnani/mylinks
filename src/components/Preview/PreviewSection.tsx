import { useAppSelector } from "../../pages/AdminDashboard/hooks/useAppSelector";
import { Link } from "../../types/Link.type";
import { styles } from "../../utils/styles";
import ListOfPreviews from "./ListOfPreviews";

interface PreviewProps {
  viewType: "preview" | "billboard";
  photoURL: string | undefined;
  username: string | undefined;
  title: string | undefined;
  links: Link[];
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

function Preview({ viewType, photoURL, username, title, links }: PreviewProps) {
  const { type } = useAppSelector((state) => state.settings);
  const { imageSize, usernameSize, titleSize, textCard, imageCard, cardSize } =
    typeConfig[viewType];

  const {
    card,
    background,
    title: { titleColor },
    username: { usernameColor },
    image: { border, shadow },
  } = styles[type];

  return (
    <section
      className={`overflow-y-auto ${background} p-2 flex flex-col items-center h-full w-full`}
    >
      <img
        className={`${imageSize} ${border} ${shadow} rounded-full mt-6`}
        src={photoURL}
        alt="User image"
      />
      <div className={`${usernameSize} ${usernameColor} font-semibold`}>
        @{username}
      </div>
      <h4 className={`${titleSize} ${titleColor} my-2 font-bold`}>{title}</h4>
      <ListOfPreviews
        cardStyles={card}
        links={links}
        imageSize={imageCard}
        titleSize={textCard}
        cardSize={cardSize}
      />
    </section>
  );
}

export default Preview;
