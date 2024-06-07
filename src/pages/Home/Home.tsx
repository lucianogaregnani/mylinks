import Button from "../../components/Button/Button";

function Home() {
  return (
    <main className="bg-[#254f1a] h-screen">
      <header className="gap-2 flex justify-center w-[60%] bg-white rounded-b-full mx-auto p-2">
        <Button size="large" color="white">
          Log In
        </Button>
        <Button color="secondary" size="large">
          Sign up free
        </Button>
      </header>
      <main className="flex items-center h-full text-[#d2e823] p-10">
        <div className="w-2/4">
          <h1 className="font-bold text-6xl">
            Everything you are. In one, simple link in bio.
          </h1>
          <p className="mt-5 font-semibold">
            One link to help you share everything you create, curate and sell
            from your Instagram, TikTok, Twitter, YouTube and other social media
            profiles.
          </p>
        </div>
      </main>
      <footer></footer>
    </main>
  );
}

export default Home;
