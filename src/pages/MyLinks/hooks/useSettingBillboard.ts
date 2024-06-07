/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs, query, where } from "firebase/firestore";
import { Setting } from "../../../types/Settings.type";
import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";

function useSettingBillboard(username: string | undefined) {
  const [setting, setSetting] = useState<Setting | undefined>();
  const [settingBillboardLoading, setSettingBillboardLoading] = useState(false);
  const [error, setError] = useState("");

  const getUserInfo = async () => {
    try {
      const refSettings = collection(db, "setting");

      const q = query(refSettings, where("username", "==", username));

      setSettingBillboardLoading(true);
      const docResponse = await getDocs(q);

      let settingRes: Setting = {
        id: "",
        username: "",
        title: "",
        userId: "",
        type: "elegant",
      };

      if (docResponse.empty) {
        throw new Error("The user doesn't exists");
      }

      docResponse.forEach((doc) => {
        settingRes = {
          id: doc.id,
          ...doc.data(),
        } as Setting;
      });

      setSetting(settingRes);
      setSettingBillboardLoading(false);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return { setting, settingBillboardLoading, error };
}

export default useSettingBillboard;
