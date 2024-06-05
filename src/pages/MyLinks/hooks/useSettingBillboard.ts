/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs, query, where } from "firebase/firestore";
import { Setting } from "../../../types/Settings.type";
import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";

function useSettingBillboard(username: string | undefined) {
  const [setting, setSetting] = useState<Setting | undefined>();
  const [settingBillboardLoading, setSettingBillboardLoading] = useState(false);

  const getUserInfo = async () => {
    let settingRes: Setting = {
      id: "",
      username: "",
      title: "",
      userId: "",
      type: "elegant",
    };
    const refSettings = collection(db, "setting");

    const q = query(refSettings, where("username", "==", username));

    setSettingBillboardLoading(true);
    const docResponse = await getDocs(q);

    docResponse.forEach((doc) => {
      settingRes = {
        id: doc.id,
        ...doc.data(),
      } as Setting;
    });

    setSetting(settingRes);
    setSettingBillboardLoading(false);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return { setting, settingBillboardLoading };
}

export default useSettingBillboard;
