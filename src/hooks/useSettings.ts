/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  changeSettings,
  changeTitle,
  changeType,
  changeUsername,
} from "../pages/AdminDashboard/store/settings";
import { useAppDispatch } from "../pages/AdminDashboard/hooks/useAppDispach";
import { useAppSelector } from "../pages/AdminDashboard/hooks/useAppSelector";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db, userConfigRef } from "../config/firebase";
import { Setting } from "../types/Settings.type";

function useSettings({ userId }: { userId: string | undefined }) {
  const dispatch = useAppDispatch();
  const { title, type, username, id } = useAppSelector(
    (state) => state.settings
  );

  const getSettings = async () => {
    if (userId) {
      const refSettings = collection(db, "setting");

      const q = query(refSettings, where("userId", "==", userId));

      const doc = await getDocs(q);
      let setting: Setting = {
        id,
        title,
        type,
        username,
        userId: "",
      };

      doc.forEach((doc) => {
        setting = {
          id: doc.id,
          ...doc.data(),
        } as Setting;
      });

      if (setting.userId) {
        dispatch(changeSettings(setting));
      } else {
        await addDoc(userConfigRef, {
          title,
          type,
          username,
          userId,
        });
      }
    }
  };

  useEffect(() => {
    getSettings();
  }, [userId]);

  const setTitle = async (newTitle: string) => {
    const settingRef = doc(db, "setting", id);
    dispatch(changeTitle(newTitle));
    await updateDoc(settingRef, {
      title: newTitle,
    });
  };

  const setType = async (newType: string) => {
    const settingRef = doc(db, "setting", id);
    dispatch(changeType(newType));
    await updateDoc(settingRef, {
      type: newType,
    });
  };

  const setUsername = async (newUsername: string) => {
    const settingRef = doc(db, "setting", id);
    dispatch(changeUsername(newUsername));
    await updateDoc(settingRef, {
      username: newUsername,
    });
  };

  return { setTitle, setType, setUsername, title, type, username };
}

export default useSettings;
