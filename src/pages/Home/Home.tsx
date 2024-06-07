import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import image from "./assets/281shots_so.png";

const LINK = import.meta.env.VITE_URL_VIEW;

function Home() {
  return (
    <main className="bg-[#254f1a] md:gap-0 gap-4 flex flex-col md:h-screen">
      <header className="bg-green-600 gap-2 flex justify-center w-full md:w-[60%] rounded-b-full mx-auto p-2">
        <Link to={`${LINK}/login`}>
          <Button size="large" color="white">
            Log In
          </Button>
        </Link>
        <Link to={`${LINK}/register`}>
          <Button color="secondary" size="large">
            Sign up free
          </Button>
        </Link>
      </header>
      <main className="flex md:flex-row flex-col items-center justify-around h-full text-[#d2e823] px-10">
        <div className="md:w-2/4">
          <h1 className="font-bold text-6xl">
            Everything you are. In one, simple link in bio.
          </h1>
          <p className="mt-5 font-semibold">
            One link to help you share everything you create, curate and sell
            from your Instagram, TikTok, Twitter, YouTube and other social media
            profiles.
          </p>
        </div>
        <div className="md:w-[40%] w-[25rem]">
          <img className="rounded-2xl border-2" src={image} alt="" />
        </div>
      </main>
      <footer className="flex items-center justify-center text-2xl font-bold bg-green-600 h-20 w-full rounded-t-2xl"></footer>
    </main>
  );
}

export default Home;
