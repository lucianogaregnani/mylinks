/* eslint-disable react-hooks/exhaustive-deps */
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../../config/firebase";

function useUserPhoto(userId: string | undefined) {
  const [photoURL, setPhotoURL] = useState("");

  const getUserPhotoURL = async () => {
    const imageRef = ref(storage, userId + "profile_picture.png");
    const photo = await getDownloadURL(imageRef);

    setPhotoURL(photo);
  };

  useEffect(() => {
    if (userId) {
      getUserPhotoURL();
    }
  }, [userId]);

  return { photoURL };
}

export default useUserPhoto;
