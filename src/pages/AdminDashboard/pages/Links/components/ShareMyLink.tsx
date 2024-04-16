import { Link } from "react-router-dom";
import AlertIcon from "./Icons/AlertIcon";
import Button from "../../../../../components/Button/Button";

function ShareMyLink() {
  return (
    <article className="md:mt-3 shadow-sm md:rounded-3xl bg-[rgb(224,233,250,1)] w-full p-[0.6rem]">
      <div className="flex md:flex-row items-start gap-3 w-full">
        <AlertIcon />
        <div className="text-[0.88rem] flex flex-col gap-2 md:flex-row md:justify-between w-full">
          <div>
            <h3>
              <span className="font-semibold">Your MyLink is live:</span>{" "}
              <Link className="underline" to="https://linktr.ee/whitertroll">
                linktr.ee/whitertroll
              </Link>
            </h3>
            <p>Share your MyLink to your socials</p>
          </div>
          <Button color="white" size="small">
            Copy URL
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ShareMyLink;
