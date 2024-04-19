import Button from "../../../../../components/Button/Button";
import AddModal from "./AddModal";
import PlusIcon from "./Icons/PlusIcon";
import useAddModal from "../hooks/useAddModal";

function AddLinkButton() {
  const { isOpen, closeModal, openModal } = useAddModal();

  return (
    <AddModal placeholder="URL" isOpen={isOpen} closeModal={closeModal}>
      <Button size="full" onClick={openModal}>
        <PlusIcon />
        Add URL
      </Button>
    </AddModal>
  );
}

export default AddLinkButton;
