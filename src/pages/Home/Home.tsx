import useAuth from "../../hooks/useAuth";

function Home() {
  const { signOutUser } = useAuth();

  return (
    <div onClick={signOutUser}>
      <header>Sign out</header>
    </div>
  );
}

export default Home;
