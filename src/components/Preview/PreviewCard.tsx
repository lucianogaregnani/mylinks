import { Link } from "react-router-dom";
import { CardStyle } from "../../types/Style.type";

interface PreviewCardProps {
  cardStyles: CardStyle;
  thumbnailUrl: string;
  title: string;
  link: string;
  titleSize: string;
  imageSize: string;
  cardSize: string;
}

function PreviewCard({
  cardStyles,
  thumbnailUrl,
  title,
  link,
  titleSize,
  imageSize,
  cardSize,
}: PreviewCardProps) {
  return (
    <Link
      to={link}
      target="_blank"
      className={`${cardSize} ${cardStyles.hover} ${cardStyles.shadow} ${cardStyles.bgColor} ${cardStyles.border} ${cardStyles.textColor} transition-all relative gap-3 flex items-center w-full p-1`}
    >
      {thumbnailUrl && (
        <img
          className={`${imageSize} rounded-full  absolute`}
          src={thumbnailUrl}
          alt="Link icon"
        />
      )}

      <p className={`${titleSize} text-center font-semibold w-3/4 mx-auto`}>
        {title || link}
      </p>
    </Link>
  );
}

export default PreviewCard;
