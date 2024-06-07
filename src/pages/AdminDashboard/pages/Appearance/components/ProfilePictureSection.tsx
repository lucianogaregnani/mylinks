import { useState } from "react";
import Button from "../../../../../components/Button/Button";
import useUploadImage from "../../../hooks/useUploadImage";
import { User, updateProfile } from "firebase/auth";
import profileIcon from "../../../../../assets/profile_icon.png";
import uploadImage from "../../../../../utils/uploadImage";

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

      const photoUrl = await uploadImage({
        thumbnail,
        userId: currentUser.uid,
      });

      await updateProfile(currentUser, { photoURL: photoUrl });
      setIsLoading(false);
    }
  };

  return (
    <article className="flex items-center gap-4 w-full p-2">
      <img
        className="w-[7rem] h-[7rem] rounded-full cursor-pointer"
        src={preview || currentUser?.photoURL || profileIcon}
        alt="Profile picture"
        onClick={() => document.getElementById("image")?.click()}
      />

      <Button
        onClick={handleUpload}
        size="full"
        color="primary"
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
