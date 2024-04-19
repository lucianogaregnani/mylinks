/* eslint-disable react-hooks/exhaustive-deps */
import { addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    getLinks().then((res) => setLinks(res || []));
  }, []);

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
      const linkDoc = doc(db, "link", id);

      await updateDoc(linkDoc, {
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
      const newLinks = [...links];

      newLinks.forEach((link) => {
        if (link.id === id) link.title = newTitle;
      });

      setLinks(newLinks);

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
        if (link.id === id) link.link = newLink;
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
      const data = await getDocs(linksRef);

      const filteredLinks: Link[] = data.docs.map((doc) => {
        const { title, link, userId, thumbnailUrl } = doc.data() as Link;

        return {
          id: doc.id,
          title: title,
          link: link,
          userId: userId,
          thumbnailUrl: thumbnailUrl,
          isActive: true,
        };
      });

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
    deleteLink,
    error,
  };
}

export default useLinks;
