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
import changeLinkProperty from "../utils/changeLinkProperty";

function useLinks() {
  const { currentUser } = useAuth();

  const dispatch = useAppDispatch();
  const links = useAppSelector((state) => state.links);

  const [error, setError] = useState("");
  const [linksStatusLoading, setLinksStatusLoading] = useState(false);

  useEffect(() => {
    if (!links.length) {
      setLinksStatusLoading(true);
      getLinks().then((res) => {
        setLinksStatusLoading(false);
        setLinks(res || []);
      });
    }
  }, [currentUser?.uid]);

  const setLinks = (newLinks: Link[]) => {
    console.log(newLinks);
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

  const updateThumbnail = async (newThumbnail: string, linkId: string) => {
    setLinks(
      changeLinkProperty({
        links,
        property: "thumbnailUrl",
        newProperty: newThumbnail,
        linkId,
      })
    );

    try {
      const linkDoc = doc(db, "link", linkId);

      await updateDoc(linkDoc, {
        thumbnailUrl: newThumbnail,
      });
    } catch (_error) {
      setError("Error");
    }
  };

  const updateTitle = async (newTitle: string, linkId: string) => {
    setLinks(
      changeLinkProperty({
        links,
        property: "title",
        newProperty: newTitle,
        linkId,
      })
    );

    try {
      const linkDoc = doc(db, "link", linkId);

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

  const updateLink = async (newLink: string, linkId: string) => {
    try {
      setLinks(
        changeLinkProperty({
          links,
          property: "link",
          newProperty: newLink,
          linkId,
        })
      );

      const linkDoc = doc(db, "link", linkId);

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
    linksStatusLoading,
  };
}

export default useLinks;
