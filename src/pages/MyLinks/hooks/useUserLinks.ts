import { useEffect, useState } from "react";
import { Link } from "../../../types/Link.type";
import getLinksByUserId from "../../../utils/getLinks";

function useUserLinks(userId: string | undefined) {
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    if (userId) {
      getLinksByUserId(userId).then((res) => setLinks(res));
    }
  }, [userId]);

  return { links };
}

export default useUserLinks;
