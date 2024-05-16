/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import AlertIcon from "../Icons/AlertIcon";
import Button from "../../../../../../components/Button/Button";
import useSettings from "../../../../../../hooks/useSettings";
import useAuth from "../../../../../../hooks/useAuth";
import { useState } from "react";
import OkIcon from "../Icons/OkIcon";

function ShareMyLink() {
  const { currentUser } = useAuth();
  const { username } = useSettings({ userId: currentUser?.uid });
  const URL = `${import.meta.env.VITE_URL_VIEW}/${username}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(URL);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <article className="shadow-sm md:rounded-3xl bg-[rgb(224,233,250,1)] w-full p-[0.6rem]">
      <div className="flex md:flex-row items-start gap-3 w-full">
        <AlertIcon />
        <div className="text-[0.88rem] flex flex-col gap-2 md:flex-row md:justify-between w-full">
          <div>
            <h3>
              <span className="font-semibold">Your MyLink is live:</span>
              <Link className="underline ml-1" target="_blank" to={URL}>
                {URL}
              </Link>
            </h3>
            <p>Share your MyLink to your socials</p>
          </div>
          <Button onClick={handleCopy} color="white" size="small">
            {copied ? <OkIcon /> : <p>Copy URL</p>}
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ShareMyLink;
