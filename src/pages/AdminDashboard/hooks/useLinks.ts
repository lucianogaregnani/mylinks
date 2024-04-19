import { addDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { db, linksRef } from "../../../config/firebase";
import { useAppDispatch } from "./useAppDispach";
import { useAppSelector } from "./useAppSelector";
import { changeLinks } from "../store/links";
import { Link } from "../../../types/Link.type";

function useLinks() {
  const { currentUser } = useAuth();

  const dispatch = useAppDispatch();
  const links = useAppSelector((state) => state.links);

  const [error, setError] = useState("");

  const setLinks = (newLinks: Link[]) => {
    dispatch(changeLinks(newLinks));
  };

  const createLink = async (link: string) => {
    const data = {
      title: "",
      link,
      userId: currentUser?.uid,
      thumbnailUrl: "",
    };

    try {
      const newLink = await addDoc(linksRef, data);

      setLinks([
        {
          id: newLink.id,
          isActive: true,
          ...data,
        },
        ...links,
      ]);
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

      const newLinks = [...links];

      newLinks.forEach((link) => {
        if (link.id === id) link.thumbnailUrl = newThumbnail;
      });

      setLinks(newLinks);
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

      const newLinks = [...links];

      newLinks.forEach((link) => {
        if (link.id === id) link.title = newTitle;
      });

      setLinks(newLinks);
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

      const newLinks = [...links];

      newLinks.forEach((link) => {
        if (link.id === id) link.link = newLink;
      });

      setLinks(newLinks);
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
    links,
    setLinks,
    createLink,
    updateThumbnail,
    updateTitle,
    updateLink,
    getLinks,
    error,
  };
}

export default useLinks;
