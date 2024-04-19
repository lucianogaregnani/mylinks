import Button from "../../../../../components/Button/Button";
import useAddModal from "../hooks/useAddModal";
import AddModal from "./AddModal";
import HeaderIcon from "./Icons/HeaderIcon";

function AddHeaderButton() {
  const { isOpen, closeModal, openModal } = useAddModal();
  return (
    <AddModal isOpen={isOpen} closeModal={closeModal} placeholder="Title">
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
