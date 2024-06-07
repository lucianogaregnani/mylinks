/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, githubProvider, googleProvider } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import urlToImage from "../utils/urlToFile";
import uploadImage from "../utils/uploadImage";
import { useAppDispatch } from "../pages/AdminDashboard/hooks/useAppDispach";
import { changeLinks } from "../pages/AdminDashboard/store/links";
import { changeSettings } from "../pages/AdminDashboard/store/settings";

function useAuth() {
  const [currentUser, setCurrentUser] = useState<User>();
  const [error, setError] = useState("");
  const [authLoadingStatus, setAuthLoadingStatus] = useState(true);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const signOutUser = async () => {
    try {
      await signOut(auth);
      dispatch(changeLinks([]));
      dispatch(
        changeSettings({
          id: "",
          title: "",
          username: "",
          type: "elegant",
        })
      );
      navigate("/login");
    } catch (error: any) {
      setError("Server error");
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/links");
    } catch (error: any) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setError("The email already exist");
      } else {
        setError("Server error");
      }
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      navigate("/admin/links");
    } catch (error: any) {
      setError("Server error");
    }
  };

  const signInWithProvider = async (provider: "google" | "github") => {
    try {
      if (provider === "google") {
        await signInWithPopup(auth, googleProvider);
      } else {
        await signInWithPopup(auth, githubProvider);
      }

      if (auth.currentUser?.photoURL) {
        const thumbnail = await urlToImage(auth.currentUser?.photoURL);

        uploadImage({ thumbnail, userId: auth.currentUser.uid });
      }
    } catch (error: any) {
      setError("Server error");
    }
  };

  useEffect(() => {
    if (!currentUser) {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user || undefined);
        setAuthLoadingStatus(false);
      });
    }
  }, []);

  return {
    currentUser,
    login,
    signUp,
    signInWithProvider,
    signOutUser,
    error,
    authLoadingStatus,
  };
}

export default useAuth;
