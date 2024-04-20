import DeleteIcon from "./Icons/DeleteIcon";

function CloseButton({
  onClick,
  type = "align",
}: {
  onClick: () => void;
  type?: "justify" | "align";
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        type === "justify" ? "justify-self-end" : "self-end"
      } hover:bg-red-400 bg-gray-100 hover:text-white transition-all p-2 rounded-full`}
    >
      <DeleteIcon />
    </button>
  );
}

export default CloseButton;
