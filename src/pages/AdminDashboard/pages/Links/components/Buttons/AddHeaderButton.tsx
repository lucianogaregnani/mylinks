import Button from "../../../../../../components/Button/Button";
import useAddModal from "../../hooks/useAddModal";
import AddModal from "./AddModal";
import HeaderIcon from "../Icons/HeaderIcon";
import validateTitle from "../../utils/validateTitle";

function AddHeaderButton({
  handleAdd,
}: {
  handleAdd: (newTitle: string) => void;
}) {
  const { isOpen, closeModal, openModal } = useAddModal();

  return (
    <AddModal
      isOpen={isOpen}
      closeModal={closeModal}
      placeholder="Title"
      onAdd={handleAdd}
      validate={validateTitle}
    >
      <Button
        size="medium"
        color="transparent"
        textSize="small"
        onClick={openModal}
      >
        <div className="flex gap-1 items-center">
          <HeaderIcon />
          Add header
        </div>
      </Button>
    </AddModal>
  );
}

export default AddHeaderButton;
