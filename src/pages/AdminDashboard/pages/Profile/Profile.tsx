import { updateProfile } from "firebase/auth";
import profileIcon from "../../../../assets/profile_icon.png";
import Button from "../../../../components/Button/Button";
import useAuth from "../../../../hooks/useAuth";
import useUploadImage from "../../hooks/useUploadImage";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../config/firebase";
import { useState } from "react";
import PlusIcon from "../Links/components/Icons/PlusIcon";

function Profile() {
  const { handleChange, preview, thumbnail } = useUploadImage();
  const { currentUser } = useAuth();
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
    <section className="max-w-xl mx-auto flex flex-col items-center w-full gap-5">
      <h1 className="mt-2 text-4xl font-bold text-slate-800 underline">
        Profile
      </h1>
      <div className="border-t-2 w-full border-b-2 border-slate-800 bg-white p-3 flex justify-center rounded-2xl">
        <img
          className="w-[13rem] h-[13rem] border-2 rounded-full cursor-pointer"
          src={preview || currentUser?.photoURL || profileIcon}
          alt=""
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
      <div className="w-full border-b-2 border-t-2 border-slate-800 bg-white p-3 rounded-2xl flex flex-col text-center gap-3">
        <h3 className="text-2xl font-bold">Your name</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-2xl p-2 bg-gray-100"
          />
          <button className="bg-green-400 hover:bg-green-500 transition-all text-white p-2 rounded-full">
            <PlusIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
