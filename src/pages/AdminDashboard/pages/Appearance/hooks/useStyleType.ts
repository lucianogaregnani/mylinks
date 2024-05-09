import { useEffect } from "react";
import useAuth from "../../../../../hooks/useAuth";
import { useAppSelector } from "../../../hooks/useAppSelector";
import getStyleType from "../../../../../utils/getStyleType";
import { changeType } from "../../../store/settings";

function useStyleType() {
  const { type } = useAppSelector((state) => state.settings);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser?.uid) {
      getStyleType(currentUser?.uid).then((res) => {
        changeType(res);
      });
    }
  }, [currentUser?.uid]);

  return { type };
}

export default useStyleType;
