import { Link } from "react-router-dom";

interface PreviewCardProps {
  thumbnailUrl: string;
  title: string;
  link: string;
}

function PreviewCard({ thumbnailUrl, title, link }: PreviewCardProps) {
  return (
    <Link
      to={link}
      target="_blank"
      className="hover:scale-95 transition-all relative bg-white gap-3 rounded-md shadow-xl flex items-center min-h-[2.5rem] w-full p-1 border-[2px] border-slate-600"
    >
      {thumbnailUrl && (
        <img
          className="w-[1.6rem] absolute left-2 rounded-full"
          src={thumbnailUrl}
          alt="Link icon"
        />
      )}

      <p className="text-md font-semibold mx-auto max-w-[90%]">
        {title || link}
      </p>
    </Link>
  );
}

export default PreviewCard;
