import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase";

async function uploadImage({
  thumbnail,
  userId,
}: {
  thumbnail: File;
  userId: string;
}) {
  const imageRef = ref(storage, userId + "profile_picture.png");
  await uploadBytes(imageRef, thumbnail);

  const photoUrl = await getDownloadURL(imageRef);

  return photoUrl;
}

export default uploadImage;
