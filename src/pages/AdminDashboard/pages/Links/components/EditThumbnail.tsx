import ButtonIcon from "./ButtonIcon";
import ImageIcon from "./Icons/ImageIcon";
import useAddModal from "../hooks/useAddModal";
import useUploadImage from "../../../hooks/useUploadImage";
import Button from "../../../../../components/Button/Button";
import CloseButton from "./CloseButton";
import FileIcon from "./Icons/FileIcon";
import { storage } from "../../../../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import useLinks from "../../../hooks/useLinks";

function EditThumbnail({ linkId }: { linkId: string }) {
  const { isOpen, closeModal, openModal } = useAddModal();
  const { handleChange, preview, thumbnail } = useUploadImage();
  const { updateThumbnail } = useLinks();

  const handleUpload = async () => {
    if (thumbnail) {
      const fileRef = ref(storage, linkId + ".png");

      await uploadBytes(fileRef, thumbnail);
      const photoURL = await getDownloadURL(fileRef);

      updateThumbnail(photoURL, linkId);
    }
  };

  return (
    <>
      {isOpen && (
        <section className="flex items-center justify-center fixed w-full h-screen top-0 left-0 z-30  bg-black/40">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="px-9 py-4 flex gap-2 flex-col items-center justify-center w-3/4 md:w-2/4 bg-white rounded-3xl"
          >
            <div className="flex items-center w-full justify-between">
              <h4 className="text-xl font-bold">Add Thumbnail</h4>
              <CloseButton onClick={closeModal} type="justify" />
            </div>

            <article
              onClick={() => document.getElementById("image")?.click()}
              className="overflow-hidden flex justify-center border-[1px] border-dashed border-slate-500 w-full h-[13rem] rounded-xl hover:bg-gray-100 trasition-all cursor-pointer"
            >
              {preview ? (
                <img className="h-full" src={preview} alt="" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <FileIcon />
                  <p className="text-center">
                    select file to upload, or drag-and-drop file
                  </p>
                </div>
              )}
            </article>
            <div className="flex w-full gap-3">
              <Button size="full" color="white">
                Clear
              </Button>
              <Button size="full" onClick={handleUpload}>
                Upload
              </Button>
            </div>
            <input
              type="file"
              onChange={handleChange}
              accept="image/*"
              id="image"
              className="hidden"
            />
          </form>
        </section>
      )}
      <ButtonIcon content="Thumbnail" onClick={openModal}>
        <ImageIcon />
      </ButtonIcon>
    </>
  );
}

export default EditThumbnail;
