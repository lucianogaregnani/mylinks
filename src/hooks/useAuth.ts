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

function useAuth() {
  const [currentUser, setCurrentUser] = useState<User>();
  const [error, setError] = useState("");

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const signInWithProvider = async (provider: "google" | "github") => {
    try {
      if (provider === "google") {
        await signInWithPopup(auth, googleProvider);
      } else {
        await signInWithPopup(auth, githubProvider);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user || undefined));
  }, []);

  return { currentUser, login, signUp, signInWithProvider, signOutUser, error };
}

export default useAuth;
