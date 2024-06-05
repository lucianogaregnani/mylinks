import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispach";
import PlusIcon from "../../Links/components/Icons/PlusIcon";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../../config/firebase";
import validateUsername from "../utils/validateUsername";
import { changeUsername } from "../../../store/settings";

interface UsernameSectionProps {
  username: string;
  setUsername: (newUsername: string) => Promise<void>;
  loadingStatus: boolean;
}

function UsernameSection({
  username,
  setUsername,
  loadingStatus,
}: UsernameSectionProps) {
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError("");
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [error]);

  const handleClick = async () => {
    setIsLoading(true);
    const validation = validateUsername(username);
    if (validation) return setError(validation);

    const settingRef = collection(db, "setting");

    const q = query(settingRef, where("username", "==", username));

    const doc = await getDocs(q);

    doc.forEach((doc) => {
      if (doc.id) {
        setError("The username already exists");
      }
    });

    setUsername(username);
    setIsLoading(false);
  };

  return (
    <article className="mb-2 w-full bg-white p-3 rounded-2xl flex flex-col text-center gap-1">
      <h3 className="text-md font-semibold text-left">Your username</h3>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Your name"
          className={`w-full rounded-2xl p-2 bg-gray-100 ${
            error && "focus:outline-red-500"
          }`}
          value={username}
          onChange={(e) => dispatch(changeUsername(e.target.value))}
        />
        <button
          onClick={handleClick}
          disabled={isLoading || loadingStatus}
          className={`${
            !(isLoading || loadingStatus)
              ? "bg-violet-600 hover:bg-violet-400"
              : "bg-gray-400 hover:bg-gray-400"
          } transition-all text-white p-2 rounded-full`}
        >
          <PlusIcon />
        </button>
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </article>
  );
}

export default UsernameSection;
