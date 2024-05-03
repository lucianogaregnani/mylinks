import { useState } from "react";
import Button from "../../../../../components/Button/Button";
import useUploadImage from "../../../hooks/useUploadImage";
import { User, updateProfile } from "firebase/auth";
import { storage } from "../../../../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import profileIcon from "../../../../../assets/profile_icon.png";

function ProfilePictureSection({
  currentUser,
}: {
  currentUser: User | undefined;
}) {
  const { handleChange, preview, thumbnail } = useUploadImage();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async () => {
    if (thumbnail && currentUser) {
      setIsLoading(true);
      const imageRef = ref(storage, currentUser?.uid + "profile_picture.png");
      await uploadBytes(imageRef, thumbnail);

      const photoUrl = await getDownloadURL(imageRef);

      await updateProfile(currentUser, { photoURL: photoUrl });
      setIsLoading(false);
    }
  };

  return (
    <article className="flex flex-col gap-5 w-full">
      <div className="border-t-2 w-full border-b-2 border-slate-800 bg-white p-3 flex justify-center rounded-2xl">
        <img
          className="w-[13rem] h-[13rem] border-2 rounded-full cursor-pointer"
          src={preview || currentUser?.photoURL || profileIcon}
          alt="Profile picture"
          onClick={() => document.getElementById("image")?.click()}
        />
      </div>
      <Button
        onClick={handleUpload}
        size="full"
        color="secondary"
        disabled={isLoading || !preview}
      >
        Upload new picture
      </Button>
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        id="image"
        className="hidden"
      />
    </article>
  );
}

export default ProfilePictureSection;
