import { useState } from "react";
import GoogleIcon from "./Icons/GoogleIcon";
import GithubIcon from "./Icons/GithubIcon";
import ButtonForm from "./Button/ButtonForm";
import useAuth from "../hooks/useAuth";

const text = {
  login: {
    title: "Welcome back",
    subtitle: "Log in to your MyLinks",
    primaryButton: "Log in",
    secondayButton: "Continue with",
  },
  register: {
    title: "Join MyLinks",
    subtitle: "Sign up for free!",
    primaryButton: "Create account",
    secondayButton: "Sign up with",
  },
};

function Form({ type }: { type: "login" | "register" }) {
  const { login, signUp, signInWithProvider, error } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleClick = () => {
    if (type === "login") {
      login(email, password);
    } else {
      signUp(email, password);
    }
  };

  const image =
    type === "login"
      ? "bg-[url('/src/assets/login.jpg')]"
      : "bg-[url('/src/assets/register.jpg')]";

  return (
    <section className="h-screen w-full flex justify-between items-center">
      <article className="flex flex-col gap-4 w-full items-center">
        <h4 className="flex flex-col text-center">
          <span className="text-5xl font-bold text-gray-900">
            {text[type].title}
          </span>
          <span className="text-gray-400 text-md">{text[type].subtitle}</span>
        </h4>
        <form className="flex items-center flex-col gap-4 w-full">
          {error}
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 text-md p-2 rounded-md w-[70%]"
            required
            autoComplete="on"
          />

          {type === "register" && (
            <input
              required
              type="text"
              placeholder="your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-100 text-md p-2 rounded-md w-[70%]"
              autoComplete="on"
            />
          )}

          <input
            required
            type="password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
            className="bg-gray-100 text-md p-2 rounded-md w-[70%]"
          />

          <ButtonForm color="primary" onClick={handleClick}>
            {text[type].primaryButton}
          </ButtonForm>
        </form>
        <span className="text-gray-900">OR</span>
        <div className="w-full flex flex-col gap-3 items-center">
          <ButtonForm
            color="white"
            onClick={() => signInWithProvider("google")}
          >
            <GoogleIcon />
            <span>{text[type].secondayButton} Google</span>
          </ButtonForm>
          <ButtonForm
            color="white"
            onClick={() => signInWithProvider("github")}
          >
            <GithubIcon />
            <span>{text[type].secondayButton} Github</span>
          </ButtonForm>
        </div>
      </article>
      <div
        className={`w-3/4 h-full bg-violet-400 ${image} bg-cover bg-center hidden md:block`}
      />
    </section>
  );
}

export default Form;
