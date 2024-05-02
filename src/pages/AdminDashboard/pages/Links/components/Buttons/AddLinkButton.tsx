import Button from "../../../../../../components/Button/Button";
import AddModal from "./AddModal";
import PlusIcon from "../Icons/PlusIcon";
import useAddModal from "../../hooks/useAddModal";
import useLinks from "../../../../../../hooks/useLinks";
import validateUrl from "../../utils/validateUrl";

function AddLinkButton() {
  const { isOpen, closeModal, openModal } = useAddModal();
  const { createLink } = useLinks();

  return (
    <AddModal
      placeholder="URL"
      isOpen={isOpen}
      closeModal={closeModal}
      onAdd={createLink}
      validate={validateUrl}
    >
      <Button size="full" onClick={openModal}>
        <PlusIcon />
        Add URL
      </Button>
    </AddModal>
  );
}

export default AddLinkButton;
