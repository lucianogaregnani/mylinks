import { useState } from "react";
import GoogleIcon from "./Icons/GoogleIcon";
import GithubIcon from "./Icons/GithubIcon";
import ButtonForm from "./Button/ButtonForm";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 text-md p-2 rounded-md w-[70%]"
            required
          />

          {type === "register" && (
            <input
              required
              type="text"
              placeholder="your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-100 text-md p-2 rounded-md w-[70%]"
            />
          )}

          <input
            required
            type="password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 text-md p-2 rounded-md w-[70%]"
          />

          <ButtonForm color="primary">{text[type].primaryButton}</ButtonForm>
        </form>
        <span className="text-gray-900">OR</span>
        <div className="w-full flex flex-col gap-3 items-center">
          <ButtonForm color="white">
            <GoogleIcon />
            <span>{text[type].secondayButton} Google</span>
          </ButtonForm>
          <ButtonForm color="white">
            <GithubIcon />
            <span>{text[type].secondayButton} Github</span>
          </ButtonForm>
        </div>
      </article>
      <div
        className={`w-3/4 h-full bg-violet-400 bg-[url('/src/assets/${type}.jpg')] bg-cover bg-center`}
      />
    </section>
  );
}

export default Form;
