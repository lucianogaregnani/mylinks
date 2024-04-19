import { addDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { db, linksRef } from "../../../config/firebase";

function useLinks() {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");

  const createLink = async (link: string) => {
    try {
      await addDoc(linksRef, {
        title: "",
        link,
        userId: currentUser?.uid,
        thumbnailUrl: "",
      });
    } catch (_error) {
      setError("Error");
    }
  };

  const updateThumbnail = async (newThumbnail: string, id: string) => {
    try {
      const movieDoc = doc(db, "link", id);

      await updateDoc(movieDoc, {
        thumbnailUrl: newThumbnail,
      });
    } catch (_error) {
      setError("Error");
    }
  };

  const updateTitle = async (newTitle: string, id: string) => {
    try {
      const movieDoc = doc(db, "link", id);

      await updateDoc(movieDoc, {
        title: newTitle,
      });
    } catch (_error) {
      setError("Error");
    }
  };

  const updateLink = async (newLink: string, id: string) => {
    try {
      const movieDoc = doc(db, "link", id);

      await updateDoc(movieDoc, {
        link: newLink,
      });
    } catch (_error) {
      setError("Error");
    }
  };

  const getLinks = async () => {
    try {
      const data = await getDocs(linksRef);

      const filteredLinks = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return filteredLinks;
    } catch (error) {
      setError("Error");
    }
  };

  return {
    createLink,
    updateThumbnail,
    updateTitle,
    updateLink,
    getLinks,
    error,
  };
}

export default useLinks;
