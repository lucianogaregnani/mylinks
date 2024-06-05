/* eslint-disable react-hooks/exhaustive-deps */
import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { db, linksRef } from "../config/firebase";
import { useAppDispatch } from "../pages/AdminDashboard/hooks/useAppDispach";
import { useAppSelector } from "../pages/AdminDashboard/hooks/useAppSelector";
import { changeLinks } from "../pages/AdminDashboard/store/links";
import { Link } from "../types/Link.type";
import getLinksByUserId from "../utils/getLinks";

function useLinks() {
  const { currentUser } = useAuth();

  const dispatch = useAppDispatch();
  const links = useAppSelector((state) => state.links);

  const [error, setError] = useState("");

  useEffect(() => {
    if (currentUser) {
      getLinks().then((res) => setLinks(res || []));
    }
  }, [currentUser]);

  const setLinks = (newLinks: Link[]) => {
    dispatch(changeLinks(newLinks));
  };

  const createLink = async (link: string) => {
    const data = {
      title: "",
      link,
      userId: currentUser?.uid,
      thumbnailUrl: "",
      isActive: true,
    };

    try {
      const newLink = await addDoc(linksRef, data);

      setLinks([
        {
          id: newLink.id,
          ...data,
        },
        ...links,
      ]);
    } catch (_error) {
      setError("Error");
    }
  };

  const updateIsActive = async (newActive: boolean, id: string) => {
    try {
      const linkDoc = doc(db, "link", id);

      const newLinks = [...links];

      newLinks.forEach((link) => {
        if (link.id === id) {
          return {
            ...link,
            isActive: newActive,
          };
        }
      });

      setLinks(newLinks);

      await updateDoc(linkDoc, {
        isActive: newActive,
      });
    } catch (_error) {
      setError("Error");
    }
  };

  const updateThumbnail = async (newThumbnail: string, id: string) => {
    try {
      const linkDoc = doc(db, "link", id);

      const newLinks = [...links];

      newLinks.forEach((link) => {
        if (link.id === id) {
          return {
            ...link,
            thumbnailUrl: newThumbnail,
          };
        }
      });

      setLinks(newLinks);

      await updateDoc(linkDoc, {
        thumbnailUrl: newThumbnail,
      });
    } catch (_error) {
      setError("Error");
    }
  };

  const updateTitle = async (newTitle: string, id: string) => {
    const newLinks = [...links];

    newLinks.forEach((link) => {
      if (link.id === id) {
        return {
          ...link,
          title: newTitle,
        };
      }
    });

    setLinks(newLinks);

    try {
      const linkDoc = doc(db, "link", id);

      await updateDoc(linkDoc, {
        title: newTitle,
      });
    } catch (_error) {
      setError("Error");
    }
  };

  const deleteLink = async (id: string) => {
    try {
      const linkDoc = doc(db, "link", id);
      const newLinks = [...links];

      setLinks(newLinks.filter((link) => link.id !== id));

      await deleteDoc(linkDoc);
    } catch (_error) {
      setError("Error");
    }
  };

  const updateLink = async (newLink: string, id: string) => {
    try {
      const newLinks = [...links];

      newLinks.forEach((link) => {
        if (link.id === id) {
          return {
            ...link,
            link: newLink,
          };
        }
      });

      setLinks(newLinks);

      const linkDoc = doc(db, "link", id);

      await updateDoc(linkDoc, {
        link: newLink,
      });
    } catch (_error) {
      setError("Error");
    }
  };

  const getLinks = async () => {
    try {
      const linksRes = await getLinksByUserId(currentUser?.uid);
      return linksRes;
    } catch (error) {
      setError("Error");
    }
  };

  return {
    links,
    setLinks,
    createLink,
    updateIsActive,
    updateThumbnail,
    updateTitle,
    updateLink,
    getLinks,
    deleteLink,
    error,
  };
}

export default useLinks;
