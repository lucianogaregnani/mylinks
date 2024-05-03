/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs, query, where } from "firebase/firestore";
import { Setting } from "../../../types/Settings.type";
import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";

function useSettingBillboard(username: string | undefined) {
  const [setting, setSetting] = useState<Setting | undefined>();

  const getUserInfo = async () => {
    let settingRes: Setting = {
      id: "",
      username: "",
      title: "",
      userId: "",
      type: "",
    };
    const refSettings = collection(db, "setting");

    const q = query(refSettings, where("username", "==", username));

    const docResponse = await getDocs(q);

    docResponse.forEach((doc) => {
      settingRes = {
        id: doc.id,
        ...doc.data(),
      } as Setting;
    });

    setSetting(settingRes);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return { setting };
}

export default useSettingBillboard;
