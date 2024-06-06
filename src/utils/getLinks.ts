import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "../types/Link.type";

async function getLinksByUserId(userId: string | undefined) {
  console.log(userId);
  const linksRef = collection(db, "link");
  const q = query(linksRef, where("userId", "==", userId));
  const docs = await getDocs(q);

  const linksRes: Link[] = [];

  docs.forEach((doc) => {
    linksRes.push({
      id: doc.id,
      ...doc.data(),
    } as Link);
  });

  return linksRes;
}

export default getLinksByUserId;
