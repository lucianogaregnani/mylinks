import Check from "./Icons/Check";

function StyleCard({
  bgColor,
  text,
  isSelected,
}: {
  bgColor: string;
  text: string;
  isSelected: boolean;
}) {
  return (
    <div className="group cursor-pointer transition-all hover:scale-105">
      <p className="text-center text-sm mb-1 text-slate-600">{text}</p>

      <div
        className={`relative border-[1px] p-2 rounded-md ${
          !isSelected ? "group-hover:border-violet-400" : "border-green-400"
        }`}
      >
        {isSelected && (
          <Check className="absolute top-[-0.5rem] right-[-0.5rem] w-4 text-white bg-green-400 rounded-full" />
        )}
        <div
          className={`bg-gradient-to-b ${bgColor} w-[3rem] rounded-xl h-[3rem] border-[1px]`}
        />
      </div>
    </div>
  );
}

export default StyleCard;
