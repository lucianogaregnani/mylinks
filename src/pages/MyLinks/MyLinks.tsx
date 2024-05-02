/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import Preview from "../../components/Preview/PreviewSection";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Setting } from "../../types/Settings.type";

function MyLinks() {
  const { username } = useParams();
  const [setting, setSetting] = useState<Setting | undefined>();

  const getUserInfo = async () => {
    const refSettings = collection(db, "setting");

    const q = query(refSettings, where("username", "==", username));

    const docResponse = await getDocs(q);

    docResponse.forEach((doc) => {
      setSetting({
        id: doc.id,
        ...doc.data(),
      } as Setting);
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <main className="h-screen w-full">
      <Preview
        type="billboard"
        photoURL="{photoURL}"
        username={setting?.username}
        title={setting?.title}
      />
    </main>
  );
}

export default MyLinks;
