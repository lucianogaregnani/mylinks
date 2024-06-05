/* eslint-disable react-hooks/exhaustive-deps */
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../../config/firebase";

function useUserPhoto(userId: string | undefined) {
  const [photoURL, setPhotoURL] = useState("");
  const [userPhotoLoading, setUserPhotoLoading] = useState(true);

  const getUserPhotoURL = async () => {
    const imageRef = ref(storage, userId + "profile_picture.png");
    const photo = await getDownloadURL(imageRef);

    setPhotoURL(photo);
    setUserPhotoLoading(false);
  };

  useEffect(() => {
    if (userId) {
      getUserPhotoURL();
    }
  }, [userId]);

  return { photoURL, userPhotoLoading };
}

export default useUserPhoto;
