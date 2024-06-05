import { useEffect, useState } from "react";
import { Link } from "../../../types/Link.type";
import getLinksByUserId from "../../../utils/getLinks";

function useUserLinks(userId: string | undefined) {
  const [links, setLinks] = useState<Link[]>([]);
  const [userLinksLoading, setUserLinksLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      getLinksByUserId(userId).then((res) => {
        setLinks(res);
        setUserLinksLoading(false);
      });
    }
  }, [userId]);

  return { links, userLinksLoading };
}

export default useUserLinks;
