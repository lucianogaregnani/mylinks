/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import { useAppSelector } from "../../../hooks/useAppSelector";
import getStyleType from "../../../../../utils/getStyleType";
import { changeType } from "../../../store/settings";

function useStyleType() {
  const { type } = useAppSelector((state) => state.settings);
  const { currentUser } = useAuth();
  const [typeLoadingStatus, setTypeLoadingStatus] = useState(true);

  useEffect(() => {
    if (currentUser?.uid) {
      getStyleType(currentUser?.uid).then((res) => {
        changeType(res);
        setTypeLoadingStatus(false);
      });
    }
  }, [currentUser?.uid]);

  return { type, typeLoadingStatus };
}

export default useStyleType;
