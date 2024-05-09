import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { Style } from "../types/Style.type";

async function getStyleType(userId: string | undefined): Promise<Style> {
  let type: Style = "elegant";

  const settingRef = collection(db, "setting");
  const q = query(settingRef, where("userId", "==", userId));

  const docs = await getDocs(q);

  docs.forEach((doc) => (type = doc.data().type));

  return type;
}

export default getStyleType;
