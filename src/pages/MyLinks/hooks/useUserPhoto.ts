/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../../config/firebase";
import defaultPhoto from "../../../assets/profile_icon.png";

function useUserPhoto(userId: string | undefined) {
  const [photoURL, setPhotoURL] = useState("");
  const [userPhotoLoading, setUserPhotoLoading] = useState(true);

  const getUserPhotoURL = async () => {
    try {
      const imageRef = ref(storage, userId + "profile_picture.png");
      const photo = await getDownloadURL(imageRef);

      setPhotoURL(photo);
    } catch (error: any) {
      if (error.message.includes("does not exist")) {
        setPhotoURL(defaultPhoto);
      }
    }
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
