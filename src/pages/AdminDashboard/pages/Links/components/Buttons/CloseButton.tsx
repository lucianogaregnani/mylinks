import DeleteIcon from "../Icons/DeleteIcon";

function CloseButton({
  onClick,
  type = "align",
  disabled,
}: {
  onClick: () => void;
  type?: "justify" | "align";
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        type === "justify" ? "justify-self-end" : "self-end"
      }  bg-gray-100  transition-all p-2 rounded-full ${
        !disabled && "hover:bg-red-400 hover:text-white"
      }`}
    >
      <DeleteIcon />
    </button>
  );
}

export default CloseButton;
