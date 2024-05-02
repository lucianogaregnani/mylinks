interface PreviewCardProps {
  thumbnailUrl: string;
  title: string;
  link: string;
}

function PreviewCard({ thumbnailUrl, title, link }: PreviewCardProps) {
  return (
    <article className="relative bg-white gap-3 rounded-xl flex items-center h-[2.5rem] w-full p-1 border-[1px]">
      {thumbnailUrl && (
        <img
          className="w-[1.6rem] absolute left-2 rounded-full"
          src={thumbnailUrl}
          alt="Link icon"
        />
      )}

      <p className="text-md font-semibold mx-auto max-w-full">
        {title || link}
      </p>
    </article>
  );
}

export default PreviewCard;
