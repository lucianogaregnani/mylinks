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
    <article className="flex gap-4 w-full p-2">
      <img
        className="w-[7rem] h-[7rem] rounded-full cursor-pointer"
        src={preview || currentUser?.photoURL || profileIcon}
        alt="Profile picture"
        onClick={() => document.getElementById("image")?.click()}
      />
      <div className="flex flex-col w-full gap-3">
        <Button
          onClick={handleUpload}
          size="full"
          color="primary"
          disabled={isLoading || !preview}
        >
          Upload new picture
        </Button>
        <Button onClick={() => {}} size="full" color="white" disabled={false}>
          Remove
        </Button>
      </div>

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
