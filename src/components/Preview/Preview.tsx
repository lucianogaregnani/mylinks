import { ClimbingBoxLoader } from "react-spinners";
import { Link } from "../../types/Link.type";
import { Style } from "../../types/Style.type";
import { styles } from "../../utils/styles";
import ListOfPreviews from "./ListOfPreviews";
import photoDefault from "../../assets/profile_icon.png";

interface PreviewProps {
  viewType: "preview" | "billboard";
  photoURL: string | undefined | null;
  username: string | undefined;
  title: string | undefined;
  links: Link[];
  type: Style;
  isLoading?: boolean;
}

const typeConfig = {
  billboard: {
    imageSize: "w-[9rem] h-[9rem]",
    usernameSize: "text-xl",
    titleSize: "text-3xl",
    imageCard: "w-[2.6rem]",
    textCard: "text-xl",
    cardSize: "min-h-[3.5rem]",
  },
  preview: {
    imageSize: "w-[5rem] h-[5rem]",
    usernameSize: "text-sm",
    titleSize: "text-xl",
    imageCard: "w-[1.6rem]",
    textCard: "text-sm",
    cardSize: "min-h-[2.5rem]",
  },
};

function Preview({
  isLoading,
  viewType,
  photoURL,
  username,
  title,
  links,
  type,
}: PreviewProps) {
  const { imageSize, usernameSize, titleSize, textCard, imageCard, cardSize } =
    typeConfig[viewType];

  const {
    card,
    background,
    title: { titleColor },
    username: { usernameColor },
    image: { border, shadow },
  } = styles[type];

  if (isLoading)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <ClimbingBoxLoader color="#393a3a" />
      </div>
    );

  return (
    <section
      className={`scrollbar-none md:overflow-y-scroll ${background} p-2 flex flex-col items-center h-full w-full`}
    >
      <div className="mt-4">
        <img
          className={`${imageSize} ${border} ${shadow} rounded-full`}
          src={photoURL || photoDefault}
          alt="User image"
        />
      </div>

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
