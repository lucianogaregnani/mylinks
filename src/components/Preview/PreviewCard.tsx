import { Link } from "react-router-dom";

interface PreviewCardProps {
  thumbnailUrl: string;
  title: string;
  link: string;
  titleSize: string;
  imageSize: string;
  cardSize: string;
}

function PreviewCard({
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
      className={`${cardSize} hover:scale-95 transition-all relative bg-white gap-3 rounded-md shadow-xl flex items-center w-full p-1 border-[2px] border-slate-600`}
    >
      {thumbnailUrl && (
        <img
          className={`${imageSize} rounded-full`}
          src={thumbnailUrl}
          alt="Link icon"
        />
      )}

      <p className={`${titleSize} text-center font-semibold w-full absolute`}>
        {title || link}
      </p>
    </Link>
  );
}

export default PreviewCard;
